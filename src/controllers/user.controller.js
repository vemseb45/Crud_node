const userService = require("../services/user.services");
const asyncHandler = require("../middlewares/asyncHandler");

/*
Controller SOLO maneja HTTP
NO lógica
NO base de datos
*/

exports.getUsers = asyncHandler(async (req, res) => {

    const users = await userService.getUsers();

    res.json(users);
});

exports.getUser = asyncHandler(async (req, res) => {

    const user = await userService.getUserById(req.params.id);

    if (!user) {
        const error = new Error("Usuario no encontrado");
        error.statusCode = 404;
        throw error;
    }

    res.json(user);
});

exports.createUser = asyncHandler(async (req, res) => {

    const newUser = await userService.createUser(req.body);

    res.status(201).json(newUser);
});

exports.updateUser = asyncHandler(async (req, res) => {

    const user = await userService.updateUser(
        req.params.id,
        req.body
    );

    res.json(user);
});

exports.deleteUser = asyncHandler(async (req, res) => {

    await userService.deleteUser(req.params.id);

    res.json({ message: "Usuario eliminado" });
});