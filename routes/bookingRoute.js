const bookingRouter = require("express").Router();
const BookingController = require("../controllers/bookingController");

bookingRouter
  .route("/")
  .get(BookingController.getAllRecords)
  .post(BookingController.addNewRecord);

bookingRouter
  .route("/:id")
  .get(BookingController.getRecordById)
  .delete(BookingController.deleteRecordById);

module.exports = bookingRouter;
