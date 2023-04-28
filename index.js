const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use((_req, _res, next) => {
  console.log("Middleware running");
  next();
});

app.use((req, res, next) => {
  if (
    req.method === "POST" &&
    req.headers["content-type"] !== "application/json"
  ) {
    return res
      .status(400)
      .send(
        `${req.method}, ${req.headers["content-type"]}, Please send proper JSON`
      );
  }
  next();
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
