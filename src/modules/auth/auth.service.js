const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../users/user.model");
const { generateToken } = require("../../utils/jwt");

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

    // 1️⃣ buscar usuario
    const user = await userModel.getUserByEmail(email);

    if (!user) {
        const error = new Error("Credenciales inválidas");
        error.statusCode = 401;
        throw error;
    }

    // 2️⃣ comparar password
    const validPassword = await bcrypt.compare(
        password,
        user.password
    );

    if (!validPassword) {
        const error = new Error("Credenciales inválidas");
        error.statusCode = 401;
        throw error;
    }

    // 3️⃣ generar token
    const token = generateToken(user);

    return {
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    };
};