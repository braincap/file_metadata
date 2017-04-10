var path = require('path');
var express = require('express');
var request = require('request');
var multer = require('multer');
var upload = multer({ dest: 'upload/' });

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.post('/upload', upload.single("upl"), function (req, res, next) {
  var return_obj = {
    "size": req.file["size"]
  }
  res.send(return_obj);
});

app.listen(process.env.PORT || 3000, () => console.log("listening to " + process.env.PORT || 3000));