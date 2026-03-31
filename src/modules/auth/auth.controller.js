const authService = require("./auth.service");
const asyncHandler = require("../../middlewares/asyncHandler");

//NO COLOCAR ROLE YA QUE SE PUEDE SOBRE ESCRBIR Y UN CLIENTE SE PUEDE
//CONVERTIR EN ADMIN
exports.register = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    const user = await authService.register(
        name,
        email,
        password
    );

    res.status(201).json(user);
});

exports.login = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const result = await authService.login(email, password);

    res.json(result);
});