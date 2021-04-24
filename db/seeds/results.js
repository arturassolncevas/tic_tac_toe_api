exports.seed = function (knex) {
  return knex('results').del()
    .then(() => knex('results').insert([
      { id: 0, name: 'draw', text: 'draw' },
      { id: 1, name: 'started', text: 'started' },
      { id: 2, name: 'player1won', text: 'player 1 won' },
      { id: 3, name: 'player2won', text: 'player 2 won' },
      { id: 4, name: 'stopped', text: 'stopped' },
    ]))
}
