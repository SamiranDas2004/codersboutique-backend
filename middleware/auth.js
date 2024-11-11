export const auth = (req, res, next) => {
    try {
        const token = req.headers['authorization']?.split(' ')[1];

        if (!token) return res.status(401).send({ message: 'Access Denied', status: false });

        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) return res.status(403).send({ message: 'Invalid Token', status: false });
            req.user = user; // Attach user info from token to request
            next();
        });
    }
    catch (err) {
        res.status(500).send({ error: "UnAuthorized User", status: false });
    }
};
