const express = require('express');
const router = express.Router();
//const User = require('../models/User');
const Employer = require('../models/Employer');
const nodemailer = require('nodemailer');

// Employer signup route
router.post('/signup/employer', async (req, res) => {
    const { companyName, location, contactInfo, interestType } = req.body;
    try {
      const newEmployer = new Employer({ companyName, location, contactInfo, interestType });
      await newEmployer.save();
      
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
        to: contactInfo,
        subject: 'Registration Confirmation',
        text: `Thank you for registering, ${companyName}.`
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Email sent: ' + info.response);
      });
  
      res.status(201).json({ message: 'Employer registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  module.exports = router;