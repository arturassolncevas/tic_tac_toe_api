exports.seed = function (knex) {
  return knex('log_types').del()
    .then(() => knex('log_types').insert([
      { id: 0, name: 'Move' },
      { id: 1, name: 'Stop' },
      { id: 2, name: 'Start' },
    ]))
}
