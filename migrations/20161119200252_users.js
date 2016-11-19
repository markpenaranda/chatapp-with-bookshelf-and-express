
exports.up = function(knex, Promise) {
  return Promise.all([

        knex.schema.createTable('users', function(table) {
            table.increments('uid').primary();
            table.string('name');
            table.timestamps();
        }),

        knex.schema.createTable('messages', function(table) {
            table.increments('id').primary();
         	table.string('message');
         	table.integer('user_id')
         		 .references('uid')
         		 .inTable('users');
            table.timestamps();
        }),

    ]);
};

exports.down = function(knex, Promise) {
  	return Promise.all([
        knex.schema.dropTable('messages'),
        knex.schema.dropTable('users')
    ])
};
