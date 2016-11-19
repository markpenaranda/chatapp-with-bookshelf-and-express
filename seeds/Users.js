
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({uid: 1, name: 'Maria Mercedez'}),
        knex('users').insert({uid: 2, name: 'Juan Dela Cruz'})
      ]);
    });
};
