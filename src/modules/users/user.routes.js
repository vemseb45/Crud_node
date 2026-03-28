const express = require("express");
const router = express.Router();

const userController = require("./user.controller");

const validate = require("../../middlewares/validate.middleware");
const auth = require("../../middlewares/auth.middleware");
const role = require("../../middlewares/role.middleware");

const { createUserSchema } = require("./user.schema");

/*
CREATE USER
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
UPDATE USER
*/
router.put(
    "/:id",
    auth,
    userController.updateUser
);

/*
DELETE USER
*/
router.delete(
    "/:id",
    auth,
    role("admin"),
    userController.deleteUser
);

module.exports = router;