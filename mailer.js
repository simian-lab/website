var express = require('express');
var app     = express();
var dotenv = require('dotenv');
dotenv.load();
var emailAddress = process.env.MAIL_ADDRESS;
var portMailer = process.env.MAIL_PORT;

app.use(express.bodyParser());
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', process.env.SENDER);
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.post('/contact', function(req, res) {
  if(req.body.captcha!=''){
    res.status(403).send('No message for spambots');
    smtpTrans.close(); // shut down the connection pool, no more messages
  }
  var nodemailer = require('nodemailer');
  var mailOpts,smtpTrans;
  smtpTrans = nodemailer.createTransport("Direct", {debug: true});

  //Mail options
  mailOpts = {
      //grab form data from the request body object
      from: req.body.Name + ' <' + req.body.Email + '>',
      to: emailAddress,
      subject: 'Website contact form ' + req.body.Name,
      text: req.body.Message
  };
  smtpTrans.sendMail(mailOpts, function(error, response){
    if(error){
        console.log(error);
        res.status(500).send('Oops, there was an error sending the message');

    }else{
        console.log("Message sent: " + response.message);
        res.send('Mesage sent succesfully');

    }
    smtpTrans.close(); // shut down the connection pool, no more messages
  });
});

app.listen(portMailer, function() {
  console.log('Server running at http://contactMailer/');
});
