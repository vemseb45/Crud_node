const aiGateway = require("./ai.gateway");

exports.ask = async (req, res) => {

    const { question, type } = req.body;

    const answer = await aiGateway.askAI({
        question,
        type
    });

    res.json({ answer });
};