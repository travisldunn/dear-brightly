const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

exports.sendEmail = async function(req, res, next) {
  // POST - /api/email
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dearbrightlyfakemailer@gmail.com",
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const handlebarOptions = {
    viewEngine: {
      extName: ".hbs",
      partialsDir: "./views/",
      layoutsDir: "./views/"
    },
    viewPath: "./views/",
    extName: ".hbs"
  };

  transporter.use("compile", hbs(handlebarOptions));

  var mailOptions = {
    from: "dearbrightlyfakemailer@gmail.com",
    to: req.body.email,
    subject: "Hello from Dear Brightly",
    template: "index"
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      return res.status(500).json(error);
    } else {
      console.log(info.response);
      return res.status(200).json("sent");
    }
  });
};
