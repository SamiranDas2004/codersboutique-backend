import { createToken } from '../utils/token.js'
import db from '../db/database.js'
import bcrypt from 'bcrypt'

export const userSignUpService = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Check if user already exists
        const existingUser = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).send({ message: 'Email already in use', status: false });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        // const hashedPassword = await hashingPassword(password, 10);

        // Insert new user
        const result = await db.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
            [name, email, hashedPassword]
        );

        // Generate JWT token
        res.status(201).send({
            message: 'User registered successfully',
            status: true,
            data: { user: result.rows[0] }
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Internal Server Error', status: false })
    }
}

export const userLoginService = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];

        if (!user) {
            return res.status(400).send({ message: 'Invalid credentials', status: false });
        }

        // Compare password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({ message: 'Invalid credentials', status: false });
        }

        // Generate JWT token
        // const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
        const token = createToken({ userId: user.id });

        res.status(200).send({
            message: 'Login successful',
            status: true,
            data: { user: { id: user.id, name: user.name, email: user.email }, token }
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Internal Server Error', status: false })
    }
}

export const getAllUsersService = async (req, res) => {
    try {
        const result = await db.query(
            'SELECT * FROM users'
        )
        return res.status(200).send({ data: result.rows, status: true });
    }
    catch (err) {
        res.status(500).send({ error: 'Internal Server Error', status: false })
    }
}