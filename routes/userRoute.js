const userRouter = require("express").Router();
const userController = require("../controllers/userController");

userRouter.route("/").get(userController.getAllRecords);
// userRouter.route("/:id").get(userController.getRecordById);

module.exports = userRouter;
