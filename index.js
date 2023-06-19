// const express = require("express");
// const app = express();
// const cors = require("cors");

// const bodyParser = require("body-parser");
// const passport = require("passport");
// const expressSession = require("express-session");
// const cookieParser = require("cookie-parser");
// // const bcrypt = require("bcrypt");

// const PORT = process.env.PORT || 8080;
// const userRouter = require("./routes/userRoute");
// const parkingRouter = require("./routes/parkingRoute");
// const plateRouter = require("./routes/plateRoute");
// const bookingRouter = require("./routes/bookingRoute");
// const authenticationRouter = require("./routes/authenticationRoute");

// app.use(cors());
// app.use(express.json());
// app.use((_req, _res, next) => {
//   console.log("Middleware running");
//   next();
// });

// app.use((req, res, next) => {
//   if (
//     req.method === "POST" &&
//     req.headers["content-type"] !== "application/json"
//   ) {
//     return res
//       .status(400)
//       .send(
//         `${req.method}, ${req.headers["content-type"]}, Please send proper JSON`
//       );
//   }
//   next();
// });

// app.use("/user", userRouter);
// app.use("/parking", parkingRouter);
// app.use("/plate", plateRouter);
// app.use("/booking", bookingRouter);

// app.use("/", authenticationRouter);

// // ----- authorize/authentication ------

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(
//   expressSession({
//     secret: "mySecretKey",
//     resave: false,
//     saveUninitialized: false,
//   })
// );
// app.use(cookieParser("mySecretKey"));
// app.use(passport.initialize());
// app.use(passport.session());

// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });

const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
const passport = require("passport");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 8080;
const userRouter = require("./routes/userRoute");
const parkingRouter = require("./routes/parkingRoute");
const plateRouter = require("./routes/plateRoute");
const bookingRouter = require("./routes/bookingRoute");
const authenticationRouter = require("./routes/authenticationRoute");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser("mySecretKey"));
app.use(
  expressSession({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use((_req, _res, next) => {
  console.log("Middleware running");
  next();
});

app.use((req, res, next) => {
  if (
    req.method === "POST" &&
    req.headers["content-type"] !== "application/json"
  ) {
    return res.status(400).send("Please send proper JSON");
  }
  next();
});

app.use("/user", userRouter);
app.use("/parking", parkingRouter);
app.use("/plate", plateRouter);
app.use("/booking", bookingRouter);
app.use("/", authenticationRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
