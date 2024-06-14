const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure:true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "mailer",
    pass: "clsbwolyibkxrori",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(receiver,message) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"maddison53@ethereal.email', // sender address
    to: receiver, // list of receivers
    subject: "Fluxss Subscribe Successful", // Subject line
    text: message, // plain text body
  
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}


module.exports = sendEmail;

