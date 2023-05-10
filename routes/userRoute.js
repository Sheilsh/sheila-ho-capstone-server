const userRouter = require("express").Router();
const userController = require("../controllers/userController");
const UserController = require("../controllers/userController");

userRouter.route("/").get(UserController.getAllRecords);

userRouter.route("/:id").get(UserController.getRecordById);
userRouter.route("/:id/booking").get(UserController.getBooking);

module.exports = userRouter;
