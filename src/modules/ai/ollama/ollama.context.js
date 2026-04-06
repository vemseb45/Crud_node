const db = require("../../../config/db");

exports.buildUserContext = async () => {

    const result = await db.query(`
        SELECT id, name, email, role
        FROM users
    `);

    return `
Eres un asistente que responde preguntas sobre usuarios.

Usuarios actuales:
${JSON.stringify(result.rows, null, 2)}
`;
};