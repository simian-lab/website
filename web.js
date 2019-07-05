var express = require('express');
var dotenv = require('dotenv');
var nodemailer = require('nodemailer');
var modRewrite = require('connect-modrewrite');
var bodyParser = require('body-parser');

dotenv.config();

var smtpTrans = nodemailer.createTransport("Direct", {debug: true});
var app     = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', process.env.SENDER || '*');
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
  if(req.body.captcha !=  (process.env.KEY_EMAIL || 'bananas')){
    return res.status(403).send({ error : 'Your no are a monkey' });
  }

  //Mail options
  smtpTrans.sendMail({
      //grab form data from the request body object
      from: req.body.Name + ' <' + req.body.Email + '>',
      to: process.env.MAIL_ADDRESS || 'test@test.com',
      subject: 'Website contact form ' + req.body.Name,
      text: ( req.body.Number ? '\n Phone : ' +  req.body.Number  : '' )
      + '\n' + req.body.Message + '\n'
  }, function(error, response){
    if(error){
      res.status(500).send({ error, response });
    }else{
      console.log("Message sent: " + response.message);
      res.send(response);
    }
  });
});

app.use(modRewrite([
  '^[^\\.]*$ /index.html [L]'
]));

app.use('/', express.static(__dirname + '/prod/'));
app.listen(process.env.PORT || 5000, function () {
  console.log('Give bananas http://localhost:' + (process.env.PORT || 5000) + '/' );
});
