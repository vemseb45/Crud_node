const db = require("../../config/db");

const getAllUsers = async () => {
    const result = await db.query("SELECT * FROM users");
    return result.rows;
};

const getUserById = async (id) => {
    const result = await db.query(
        "SELECT * FROM users WHERE id = $1",
        [id]
    );
    return result.rows[0];
};

const createUser = async (name, email,password) => {
    const result = await db.query(
        "INSERT INTO users (name, email,password) VALUES ($1, $2, $3) RETURNING name,email ",
        [name, email,password]
    );
    return result.rows[0];
};

const getUserByEmail = async (email) => {
    const result = await db.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    );
    return result.rows[0];
};

const updateUser = async (id, name, email) => {
    const result = await db.query(
        "UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *",
        [name, email, id]
    );
    return result.rows[0];
};

const deleteUser = async (id) => {
    await db.query("DELETE FROM users WHERE id=$1", [id]);
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail, 
    createUser,
    updateUser,
    deleteUser,
};