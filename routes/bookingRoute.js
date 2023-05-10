const bookingRouter = require("express").Router();
const BookingController = require("../controllers/bookingController");

bookingRouter.route("/").get(BookingController.getAllRecords);
bookingRouter
  .route("/:id")
  .get(BookingController.getRecordById)
  .post(BookingController.addNewRecord);

module.exports = bookingRouter;
