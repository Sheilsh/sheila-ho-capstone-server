const userRouter = require("express").Router();
const UserController = require("../controllers/userController");

userRouter.route("/").get(UserController.getAllRecords);

userRouter.route("/:id").get(UserController.getRecordById);

module.exports = userRouter;
