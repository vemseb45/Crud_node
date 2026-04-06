const axios = require("axios");
const { buildUserContext } = require("./ollama.context");

exports.askAI = async (question) => {

    const context = await buildUserContext();

    const response = await axios.post(
    "http://localhost:11434/api/generate",
    {
        model: "llama3",
        prompt: `${context}

Pregunta: ${question}
Respuesta:`,
        stream: false
    },
    {
        timeout: 60000 // 60 segundos
    }
);
    return response.data.response;
};