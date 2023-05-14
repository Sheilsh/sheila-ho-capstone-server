const bookingRouter = require("express").Router();
const BookingController = require("../controllers/bookingController");

// bookingRouter.route("/").get(BookingController.getAllRecords);
// bookingRouter
//   .route("/:id")
//   .get(BookingController.getRecordById)
//   .post(BookingController.addNewRecord);

bookingRouter
  .route("/")
  .get(BookingController.getAllRecords)
  // .get(BookingController.getAvailability)
  .post(BookingController.addNewRecord);

bookingRouter
  .route("/:id")
  .get(BookingController.getRecordById)
  // .put(BookingController.updateRecord)
  .delete(BookingController.deleteRecordById);

module.exports = bookingRouter;
