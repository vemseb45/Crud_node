const { z } = require("zod");

const createUserSchema = z.object({
    name: z.string().min(3, "Nombre muy corto"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Password mínimo 6 caracteres")
});

module.exports = {
    createUserSchema
};
