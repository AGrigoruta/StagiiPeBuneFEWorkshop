var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var dbConfig = require('./server/config/db');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(dbConfig.url, function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.info('Connected to DB.');
});

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

require('./server/routes')(app);


var server = app.listen(process.env.PORT || 3000, function () {
  console.info('\nServer ready on port %d\n', server.address().port);
});

module.exports = app;
