const userModel = require("./user.model");
const bcrypt = require("bcrypt");

/*
SERVICE LAYER
Aquí vive la lógica de negocio
NO en el controller
*/

exports.createUser = async (data) => {

    // 🔐 hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return await userModel.createUser(
        data.name,
        data.email,
        hashedPassword
    );
};

exports.getUsers = async () => {
    return await userModel.getAllUsers();
};

exports.getUserById = async (id) => {
    return await userModel.getUserById(id);
};

exports.updateUser = async (id, data) => {
    return await userModel.updateUser(
        id,
        data.name,
        data.email
    );
};

exports.deleteUser = async (id) => {
    return await userModel.deleteUser(id);
};