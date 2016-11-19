var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Message = require('../models/message');

/* GET users listing. */
router.get('/:userId', function(req, res, next) {
	new User({uid: req.params.userId}).fetch().then(function(user) {
			var user = user.toJSON();
			Message.fetchAll().then(function(messages) {
				  
				  res.render('chat', { title: user.name, user: user, messages: messages.toJSON()});
			});
		
	})	
});

module.exports = router;
