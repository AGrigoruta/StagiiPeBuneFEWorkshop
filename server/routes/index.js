var express = require('express');
var router = express.Router();
var users = require('./users');
var chat = require('./chat');

module.exports = function(app) {

    router.use('/users', users);
    router.use('/chat', chat);

	router.route('*').get(function (req, res) {
        res.render('index.html');
    });

	app.use('/', router);
};
