const express = require("express");
const mongoose = require("mongoose");
let app = express();
let configure = require("./server/configure");

const PORT = process.env.PORT || 2027;

app = configure(app);

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
