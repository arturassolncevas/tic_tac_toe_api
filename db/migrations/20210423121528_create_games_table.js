exports.up = function (knex) {
  return knex.schema
    .createTable('games', (table) => {
      table.increments().primary()
      table.integer('boardSize')
      table.dateTime('finished_at')
      table.integer('resultId')
        .references('id')
        .inTable('results')
        .notNullable()
      table.timestamps(false, true)
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('games')
}
