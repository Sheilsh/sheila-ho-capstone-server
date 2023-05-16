const userRouter = require("express").Router();
const UserController = require("../controllers/userController");

userRouter.route("/").get(UserController.getAllRecords);

userRouter
  .route("/:id")
  .get(UserController.getRecordById)
  .put(UserController.updateById);

userRouter.route("/:id/booking").get(UserController.getBooking);

module.exports = userRouter;
