const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const validate = require("../middlewares/validate.middleware");
const { createUserSchema } = require("../validations/user.schema");
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");

/*
CREATE USER
Validación antes de llegar al controller
*/
router.post(
    "/",
    validate(createUserSchema),
    userController.createUser
);

/*
GET USERS
*/
router.get("/", userController.getUsers);

/*
GET ONE USER
*/
router.get("/:id", userController.getUser);

/*
UPDATE USER (requiere login)
*/
router.put(
    "/:id",
    auth,
    userController.updateUser
);

/*
DELETE USER (solo admin)
*/
router.delete(
    "/:id",
    auth,
    role("admin"),
    userController.deleteUser
);

module.exports = router;