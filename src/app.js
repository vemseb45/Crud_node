const express = require("express");
const app = express();

app.use(express.json());

// ✅ NUEVA ARQUITECTURA MODULAR
app.use("/auth", require("./modules/auth/auth.routes"));
app.use("/users", require("./modules/users/user.routes"));
app.use("/ai", require("./modules/ai/ai.routes")); //IA

app.get("/", (req, res) => {
    res.send("API funcionando 🚀");
});

module.exports = app;