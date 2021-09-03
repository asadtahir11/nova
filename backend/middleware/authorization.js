const authorization = (req, res, next) => {
    if (!req.role === "admin") {
        const error = new Error('Not admin!');
        error.statusCode = 401;
        throw error;
    }
    next();
}


module.exports = authorization;