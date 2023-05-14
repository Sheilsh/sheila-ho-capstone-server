const parkingRouter = require("express").Router();
const ParkingController = require("../controllers/parkingController");

parkingRouter.route("/").get(ParkingController.getAllRecords);
//   .put(ParkingController.updateParkingEndTime);

// parkingRouter.get("/available-spots", ParkingController.getAvailableSpotCount);

module.exports = parkingRouter;
