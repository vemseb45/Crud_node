const express = require("express");
const userRoutes = require("./routers/user.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API funcionando 🚀");
});

app.use("/users", userRoutes);

app.use(errorMiddleware);

module.exports = app;
