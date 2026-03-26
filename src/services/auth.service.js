const jwt = require("jsonwebtoken");

const SECRET = "SUPER_SECRET_KEY";

exports.generateToken = (user) => {

    return jwt.sign(
        {
            id: user.id,
            role: user.role || "user"
        },
        SECRET,
        { expiresIn: "1h" }
    );
};
