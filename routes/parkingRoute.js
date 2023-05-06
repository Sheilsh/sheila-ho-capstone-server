const parkingRouter = require("express").Router();
const ParkingController = require("../controllers/parkingController");

parkingRouter.route("/").get(ParkingController.getAllRecords);

module.exports = parkingRouter;
