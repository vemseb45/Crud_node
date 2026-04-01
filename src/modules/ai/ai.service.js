const axios = require("axios");
const db = require("../../config/db");

/*
Preguntar a la IA usando datos reales
*/
exports.askAI = async (question) => {

    // 1️⃣ Obtener datos DB (controlado por backend)
    const result = await db.query(`
        SELECT id, name, email, role
        FROM users
    `);

    const users = result.rows;

    // 2️⃣ Crear contexto para la IA
    const context = `
    Eres un asistente que responde preguntas sobre usuarios.

    Usuarios actuales:
    ${JSON.stringify(users, null, 2)}
    `;

    // 3️⃣ Llamar Ollama
    const response = await axios.post(
        "http://localhost:11434/api/generate",
        {
            model: "llama3",
            prompt: `${context}

Pregunta: ${question}
Respuesta:`,
            stream: false
        }
    );

    return response.data.response;
};