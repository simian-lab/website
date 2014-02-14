var express = require('express');
var app     = express();

app.use(express.bodyParser());

app.post('/contact', function(req, res) {
  var nodemailer = require('nodemailer');
  var mailOpts,smtpTrans;
  smtpTrans = nodemailer.createTransport("Direct", {debug: true});

  //Mail options
  mailOpts = {
      from: req.body.Name + ' <' + req.body.Email + '>', //grab form data from the request body object
      to: 'info@simian.co',
      subject: 'Website contact form ' + req.body.Name,
      text: req.body.Message
  };
  smtpTrans.sendMail(mailOpts, function(error, response){
    if(error){
        console.log(error);
        res.send('Oops, there was an error sending the message');

    }else{
        console.log("Message sent: " + response.message);
        res.send('Mesage sent succesfully');

    }
    smtpTrans.close(); // shut down the connection pool, no more messages
  });
});

app.listen(7544, function() {
  console.log('Server running at http://127.0.0.1:7544/');
});

