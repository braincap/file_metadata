var path = require('path');
var express = require('express');
var multer = require('multer');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.listen(process.env.PORT || 3000);