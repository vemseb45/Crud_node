module.exports = (...allowedRoles) => {

    return (req, res, next) => {

        // ✅ verificar autenticación primero
        if (!req.user) {
            return res.status(401).json({
                message: "No autenticado"
            });
        }

        // ✅ verificar autorización
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                message: "No autorizado"
            });
        }

        next();
    };
};