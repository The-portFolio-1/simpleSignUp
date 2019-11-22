const express = require("express");
const mongoose = require("mongoose");
let app = express();
let configure = require('./server/configure');

app = configure(app);

// mongoose.connect("mongodb://localhost/authentication", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;

// db.once("open", () => {
//   console.log("Connected to Database...");
// });

// db.on("error", (err) => {
//   console.log(err);
// });

app.get('/', (req, res) => {
  res.render('contact');
});

app.post('/send', (req, res) => {
  console.log(req.body);

  res.render('contact', {msg:'Email has been sent'});

});

const PORT = process.env.PORT || 2027;

app.listen(PORT, () => console.log(`Server Listening on: ${PORT}`));