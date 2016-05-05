var express = require('express');
var modRewrite = require('connect-modrewrite');

var app = express();
app.use(modRewrite([
  '^[^\\.]*$ /index.html [L]'
]));
app.use('/', express.static(__dirname + '/prod/'));

app.listen(process.env.PORT || 5000);
