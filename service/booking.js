const Booking = require("../models/booking");

class BookingService {
  getAllRecords() {
    return Booking.getAllRecords();
  }

  getRecordById(id) {
    return Booking.getRecordById(id);
  }
}

module.exports = new BookingService();
