var knex = require('knex')({
  client: 'pg',
  connection: "postgres://zlsgbnkwicjyfw:YbUdvA2O6B9QzDatx_jQ0qVDv4@ec2-54-243-249-37.compute-1.amazonaws.com:5432/d8612r0fl89fh",
  searchPath: 'knex,public'
});

module.exports = knex;