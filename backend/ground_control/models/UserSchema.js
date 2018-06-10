'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
	userName: {
		type: String,
		required: 'User Name is required'
	},
	password: {
		type:String,
		required: 'Password is required'
	},
	created: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', UserSchema);