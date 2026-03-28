const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../users/user.model");

const JWT_SECRET = "super_secret_key";

exports.register = async (name, email, password) => {

    const existingUser = await userModel.getUserByEmail(email);

    if (existingUser) {
        const error = new Error("Email ya registrado");
        error.statusCode = 400;
        throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.createUser(
        name,
        email,
        hashedPassword
    );

    return user;
};

exports.login = async (email, password) => {

    const user = await userModel.getUserByEmail(email);

    if (!user)
        throw Object.assign(new Error("Credenciales inválidas"), { statusCode: 401 });

    const match = await bcrypt.compare(password, user.password);

    if (!match)
        throw Object.assign(new Error("Credenciales inválidas"), { statusCode: 401 });

    const token = jwt.sign(
        { id: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: "1h" }
    );

    return { token };
};