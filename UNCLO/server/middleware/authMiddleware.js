import jwt from 'jsonwebtoken';

export const fetchUser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Invalid token!" });
    }

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data.user;
        next();
    } catch (err) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
};
