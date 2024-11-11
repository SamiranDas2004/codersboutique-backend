import db from '../db/database.js'

export const addCandidateService = async (req, res) => {
    try {
        const { name } = req.body;
        const result = await db.query(
            'INSERT INTO candidates (name, status, date) VALUES ($1, $2, $3) RETURNING *',
            [name, 'Pending', new Date()]
        )
        res.status(201).send({ message: 'Candidate added!', status: true, data: result.rows[0] })
    } catch (err) {
        res.status(500).send({ error: "Internal Server Error", status: false });
    }
}

export const getCandidatesService = async (req, res) => {
    try {
        const { page = 1, limit = 10, sortBy = 'date', order = 'desc', name, status, startDate, endDate } = req.query;
        const offset = (page - 1) * limit;

        // Validate sortBy and order
        const validSortFields = ['name', 'status', 'date'];
        const validOrderValues = ['asc', 'desc'];
        if (!validSortFields.includes(sortBy)) {
            return res.status(400).send({ message: 'Invalid sortBy field', status: false });
        }
        if (!validOrderValues.includes(order.toLowerCase())) {
            return res.status(400).send({ message: 'Invalid order value', status: false });
        }

        // Build filtering conditions dynamically
        const filterConditions = [];
        const values = [];

        if (name) {
            filterConditions.push(`name ILIKE $${values.length + 1}`);
            values.push(`%${name}%`);
        }

        if (status) {
            filterConditions.push(`status = $${values.length + 1}`);
            values.push(status);
        }

        if (startDate && endDate) {
            filterConditions.push(`date BETWEEN $${values.length + 1} AND $${values.length + 2}`);
            values.push(startDate, endDate);
        } else if (startDate) {
            filterConditions.push(`date >= $${values.length + 1}`);
            values.push(startDate);
        } else if (endDate) {
            filterConditions.push(`date <= $${values.length + 1}`);
            values.push(endDate);
        }

        // Combine filters with sorting and pagination
        const whereClause = filterConditions.length ? `WHERE ${filterConditions.join(' AND ')}` : '';
        const queryText = `
            SELECT * FROM candidates 
            ${whereClause} 
            ORDER BY ${sortBy} ${order.toUpperCase()} 
            LIMIT $${values.length + 1} OFFSET $${values.length + 2}
        `;

        // Add pagination values to query
        values.push(limit, offset);

        // Execute query
        const result = await db.query(queryText, values);

        // Get total count of filtered candidates for pagination metadata
        const countQueryText = `SELECT COUNT(*) FROM candidates ${whereClause}`;
        const countResult = await db.query(countQueryText, values.slice(0, values.length - 2));
        const totalCandidates = parseInt(countResult.rows[0].count, 10);
        const totalPages = Math.ceil(totalCandidates / limit);

        // Respond with the filtered, paginated, and sorted list of candidates
        res.status(200).send({
            message: 'Candidates retrieved successfully',
            status: true,
            data: result.rows,
            pagination: {
                totalCandidates,
                totalPages,
                currentPage: parseInt(page, 10),
                perPage: parseInt(limit, 10)
            }
        });
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error", status: false });
    }
}

export const updateCandidateService = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!['Pending', 'In Progress', 'Completed'].includes(status)) {
            res.status(400).send({ error: 'Invalid status', status: false })
        }
        const result = await db.query(
            'UPDATE candidates SET status = $1 WHERE id = $2 RETURNING *',
            [status, id]
        )
        if (result.rows.length === 0) {
            return res.status(404).send({ message: 'Candidate not found', status: false });
        }
        res.status(200).send({ message: 'Candidate status updated!', status: true, data: result.rows[0] });
    } catch (err) {
        res.status(500).send({ error: "Internal Server Error", status: false });
    }
}