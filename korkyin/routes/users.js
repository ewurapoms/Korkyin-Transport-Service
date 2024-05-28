const express = require('express');
const router = express.Router();
const User = require('../models/User');
//const Employer = require('../models/Employer');
const nodemailer = require('nodemailer');

// User signup route
router.post('/signup/user', async (req, res) => {
  const { name, age, gender, email, education, interest, paymentType } = req.body;
  try {
    const newUser = new User({ name, age, gender, email, education, interest, paymentType });
    await newUser.save();
    
    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
      }
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Registration Confirmation',
      text: `Thank you for registering, ${name}.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Email sent: ' + info.response);
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});


modu;e.exports = router;