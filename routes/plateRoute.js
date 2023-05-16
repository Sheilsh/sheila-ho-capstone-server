const plateRouter = require("express").Router();
const PlateController = require("../controllers/plateController");

plateRouter.route("/:userId").post(PlateController.addPlateByUserId);

module.exports = plateRouter;
