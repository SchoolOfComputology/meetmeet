'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.list_all_users = function(req, res) {
	User.find({}, function(err, task) {
		if (err){ 
			res.send(err);
		}
		res.json(task);
	});
};

module.exports.create_an_user = function(req, res) {
	var new_task = new User(req.body);
	new_task.save(function(err, task) {
		if (err)
			res.send(err);
		res.json(task);
	});
  
};


module.exports.get_an_user = function(req, res) {
	User.findById(req.params.userId, function(err, task) {
		if (err)
			res.send(err);
		res.json(task);
	});
};


module.exports.update_an_user = function(req, res) {
	User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, task) {
		if (err)
			res.send(err);
		res.json(task);
	});
};


module.exports.delete_an_user = function(req, res) {
	User.remove({
		_id: req.params.userId
	}, function(err, task) {
		
		if (err)
			res.send(err + task);
		res.json({ message: 'User is ded' + task});
	});
};