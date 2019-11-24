const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

module.exports = app => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use("/public", express.static(path.join(__dirname, "../public")));

  app.engine(
    "handlebars",
    exphbs.create({
      defaultLayout: "main",
      layoutsDir: `${app.get("views")}/layouts`,
      partialsDir: `${app.get("views")}/partials`,
    }).engine,
  );
  app.set("view engine", "handlebars");
  return app;
};
