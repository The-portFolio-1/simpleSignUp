const express = require("express");
const mongoose = require("mongoose");
let app = express();

const PORT = process.env.PORT || 2027;

mongoose.connect("mongodb://localhost/authentication", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on(
  "error",
  console.error.bind(console, "Connection Error"),
);
mongoose.connection.once("open", () => {
  console.log("Connected to Database...");
});

app.listen(PORT, () => {
  console.log(`Server Listening on: ${PORT}`);
});
