const Booking = require("../models/booking");

class BookingService {
  getAllRecords() {
    return Booking.getAllRecords();
  }

  getRecordById(id) {
    return Booking.getRecordById(id);
  }

  addNewRecord(booking) {
    return Booking.addInventoryItem(booking);
  }
}

module.exports = new BookingService();
