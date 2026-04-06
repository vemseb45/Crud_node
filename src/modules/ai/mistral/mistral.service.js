const client = require("./mistral.client");
const { businessPrompt } = require("./mistral.prompts");

exports.askBusinessAI = async (question) => {

    try {

        const response = await client.chat.complete({
            model: "mistral-small-latest",
            messages: [
                {
                    role: "system",
                    content: businessPrompt
                },
                {
                    role: "user",
                    content: question
                }
            ]
        });

        return response.choices[0].message.content;

    } catch (error) {
        throw new Error("Error consultando Mistral AI");
    }
};