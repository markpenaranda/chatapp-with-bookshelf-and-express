var knex = require('../config/db');
var bookshelf = require('bookshelf')(knex);


var Messages = bookshelf.Model.extend({
	tableName: 'messages'
})

module.exports = Messages;