'use strict';
module.exports = function(app) {
	var smartiiController = require('../controllers/UserController');
	var path = require('path');
	var express = require('express');

	//add folder to serve static content
	app.use(express.static('app'));

	app.all('/users', function(req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'X-Requested-With');
		next();
	});
	// todoList Routes
	app.route('/users')
		.get(smartiiController.list_all_users)
		.post(smartiiController.create_an_user);


	app.route('/users/:userId')
		.get(smartiiController.get_an_user)
		.put(smartiiController.update_an_user)
		.delete(smartiiController.delete_an_user);

	//serve an splash for the root of the app
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname + '/../app/default.html'));
	});
};