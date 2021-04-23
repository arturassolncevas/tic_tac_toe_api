exports.seed = function (knex) {
  return knex('results').del()
    .then(() => knex('results').insert([
      { id: 0, name: 'Draw' },
      { id: 1, name: 'In Progress' },
      { id: 2, name: 'Player 1 won' },
      { id: 3, name: 'Player 2 won' },
    ]))
}
