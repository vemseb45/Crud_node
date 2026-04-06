module.exports = (schema) => (req, res, next) => {

    //  Detectar si es Zod
    if (schema.safeParse) {

        const result = schema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                success: false,
                errors: result.error.errors.map(e => e.message)
            });
        }

        req.body = result.data;
        return next();
    }

    //  Detectar si es Joi
    if (schema.validate) {

        const { error, value } = schema.validate(req.body, {
            abortEarly: false
        });

        if (error) {
            return res.status(400).json({
                success: false,
                errors: error.details.map(e => e.message)
            });
        }

        req.body = value;
        return next();
    }

    // schema inválido
    return res.status(500).json({
        message: "Schema validation inválido"
    });
};