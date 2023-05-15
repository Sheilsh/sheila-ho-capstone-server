const Booking = require("../models/booking");

class BookingService {
  getAllRecords() {
    return Booking.getAllRecords();
  }

  getRecordById(id) {
    return Booking.getRecordById(id);
  }

  addNewRecord(booking) {
    return Booking.addNewRecord(booking);
  }

  deleteRecordById(id) {
    return Booking.deleteRecordById(id);
  }
}

module.exports = new BookingService();
