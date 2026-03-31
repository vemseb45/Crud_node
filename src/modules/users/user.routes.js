const express = require("express");
const router = express.Router();

const userController = require("./user.controller");

const validate = require("../../middlewares/validate.middleware");
const auth = require("../../middlewares/auth.middleware");
const role = require("../../middlewares/role.middleware");

const { createUserSchema } = require("./user.schema");

/*
CREATE USER (SOLO ADMIN)
*/
router.post(
    "/",
    auth,
    role("admin"),
    validate(createUserSchema),
    userController.createUser
);

/*
GET USERS (SOLO ADMIN)
*/
router.get(
    "/", 
    auth,
    role("admin"),
    userController.getUsers);

/*
GET ONE USER (SOLO ADMIN)
*/
router.get(
    "/:id",
    auth,
    role("admin"),
    userController.getUser);

/*
UPDATE USER (SOLO ADMIN)
*/
router.put(
    "/:id",
    auth,
    role("admin"),
    userController.updateUser
);

/*
DELETE USER (SOLO ADMIN)
*/
router.delete(
    "/:id",
    auth,
    role("admin"),
    userController.deleteUser
);

module.exports = router;