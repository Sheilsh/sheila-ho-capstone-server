const authenticationRouter = require("express").Router();
const AuthenticationController = require("../controllers/authenticationController");

authenticationRouter.post("/signup", AuthenticationController.signup);
authenticationRouter.post("/login", AuthenticationController.login);

module.exports = authenticationRouter;
