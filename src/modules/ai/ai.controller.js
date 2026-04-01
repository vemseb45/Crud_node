const aiService = require("./ai.service");

exports.ask = async (req, res) => {

    const { question } = req.body;

    if (!question) {
        return res.status(400).json({
            message: "Pregunta requerida"
        });
    }

    const response = await aiService.askAI(question);

    res.json({
        answer: response
    });
};