require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const emailRoutes = require("./routes/email");

const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/email", emailRoutes);

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
  console.log(`Server is starting on port ${PORT}`);
});
