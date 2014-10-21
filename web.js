var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/app'));

// Send encoding header
app.use('/images/mainPicture.svgz', function (req, res, next) {
  res.set( 'Content-Type', 'image/svg+xml')
  res.set( 'Content-Encoding', 'gzip');
  next();
})
app.listen(process.env.PORT || 5000);
