module.exports = function(io) {
	var express = require('express');
	var router = express.Router();


	// socket.io events
	io.on( "connection", function( socket )
	{
	    socket.on('chat message', function(msg){
		    io.emit('chat message', msg);
		  });

	});

	/* GET home page. */
	router.get('/', function(req, res, next) {
	  res.render('index', { title: 'Welcome to Sample Chat App' });
	});


	return router;
}
