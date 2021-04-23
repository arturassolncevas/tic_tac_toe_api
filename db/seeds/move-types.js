exports.seed = function (knex) {
  return knex('move_types').del()
    .then(() => knex('move_types').insert([
      { id: 0, name: 'X' },
      { id: 1, name: 'O' },
    ]))
}