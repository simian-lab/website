var express = require('express');
var dotenv = require('dotenv');
var modRewrite = require('connect-modrewrite');

dotenv.config();

var app     = express();

app.use(modRewrite([
  '^[^\\.]*$ /index.html [L]'
]));

app.use('/', express.static(__dirname + '/prod/'));
app.listen(process.env.PORT || 5000, function () {
  console.log('Give bananas http://localhost:' + (process.env.PORT || 5000) + '/' );
});
