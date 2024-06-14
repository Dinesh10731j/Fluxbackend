// emailService.js
const nodemailer = require('nodemailer');
const {FluxUserModel} = require("../model/fluxsignup")
require('dotenv').config();

const Subscriber = FluxUserModel.find({});
console.log(Subscriber)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to:Subscriber,
    subject:"Subscribing",
    text:"Thamk you for Subscribing to Flux",
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

module.exports = { sendEmail };
