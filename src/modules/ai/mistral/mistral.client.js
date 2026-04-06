const { Mistral } = require("@mistralai/mistralai");

const client = new Mistral({
    apiKey: process.env.MISTRAL_API_KEY,
});

module.exports = client;