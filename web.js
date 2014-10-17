var express = require('express');
var app = express();

app.use(function(req, res, next) {
    next();
});

app.use('/', express.static(__dirname + '/'));

app.listen(process.env.PORT || 5000);
