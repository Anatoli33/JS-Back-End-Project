import jwt from 'jsonwebtoken';

const JWT_SECRET = 'c4d8a1e2a7c6f48d94f1a3e1a3a5e7f2d1c8a9b7c4f6e3a5d7f9b2c4a8e1f3c9';

export function authMiddleware(req, res, next){
    const token = req.cookies['auth'];

    if (!token) {
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, JWT_SECRET);

        req.user = decodedToken;
        req.isAuthenticated = true;

        next();
    } catch (error) {
        res.clearCookie('auth');

        res.redirect('/auth/login');
    }
}

export function isAuth(req, res, next){
    if(!req.isAuthenticated){
        return res.redirect('/auth/login');
    }

    next();
}