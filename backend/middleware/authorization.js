module.exports = (req, res, next) => {
    if (req.role === "basic") {
        const error = new Error('Not admin!');
        error.statusCode = 401;
        throw error;
    }
    next();
}


