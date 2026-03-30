const { verifyToken } = require("../utils/jwt");

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token requerido"
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = verifyToken(token);

        // ⭐ usuario disponible en toda la request
        req.user = decoded;

        next();

    } catch (err) {
        return res.status(401).json({
            message: "Token inválido"
        });
    }
};