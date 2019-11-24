const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require('nodemailer');
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
  // console.log(req.body);
  // res.render('contact', {msg:'Email has been sent'});


  const output =  `
  <p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>
  <li>Name: ${req.body.name}</li>
  <li>Company: ${req.body.company}</li>
  <li>Email: ${req.body.email}</li>
  <li>Phone: ${req.body.phone}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
  `;

  let transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      secure: false, // true for 465, false for other ports
      auth: {
          user: 'f2cd800d231be1', // generated ethereal user
          pass: 'ef6f63793c2003' // generated ethereal password
      },
      tls: {
          rejectUnauthorized: false
      }
  });

  // setup email data with unicode symbols
  let mailOptions = {
  from: 'lloyddamien46@gmail.com', // sender address
  to: 'eofere@gmail.com', // list of receivers
  subject: 'Customers Feedback', // Subject line
  html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      console.log(error);
  } else {
      console.log('Email sent: ' + info.response);
  }

  res.render('contact', {msg:'Email has been sent'});
  });

});

const PORT = process.env.PORT || 2027;

app.listen(PORT, () => console.log(`Server Listening on: ${PORT}`));