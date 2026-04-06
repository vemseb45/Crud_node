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
        timeout: 600000 // 
    }
);
    return response.data.response;
};