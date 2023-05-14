const Booking = require("../models/booking");

class BookingService {
  getAllRecords() {
    return Booking.getAllRecords();
  }

  getRecordById(id) {
    return Booking.getRecordById(id);
  }

  // async getAvailability() {
  //   return Booking.getAvailability();
  // }

  addNewRecord(booking) {
    return Booking.addNewRecord(booking);
  }

  deleteRecordById(id) {
    return Booking.deleteRecordById(id);
  }
}

module.exports = new BookingService();
