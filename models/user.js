var knex = require('../config/db');
var bookshelf = require('bookshelf')(knex);
var Messages = require('./message');

var User = bookshelf.Model.extend({
	tableName: 'users',

	messages: function() {
		return this.hasMany(Messages);
	}
})

module.exports = User;