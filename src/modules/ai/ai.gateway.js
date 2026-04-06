const ollamaService = require("./ollama/ollama.service");
const mistralService = require("./mistral/mistral.service");

exports.askAI = async ({ question, type }) => {

    switch (type) {
        case "business":
            return mistralService.askBusinessAI(question);

        case "db":
        default:
            return ollamaService.askAI(question);
    }
};