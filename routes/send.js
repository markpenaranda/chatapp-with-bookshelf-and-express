var express = require('express');
var router = express.Router();
var Message = require('../models/message');


/* Send Post . */
router.post('/',function(req, res, next) {
	
	var text = req.body.message;
	var user_id = req.body.userId;

	console.log(user_id);
	new Message({message: text, user_id: user_id}).save().then(function(data){
		res.send(data);

		
	});

  
});

module.exports = router;
 