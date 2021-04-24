exports.up = function (knex) {
  return knex.schema
    .createTable('games', (table) => {
      table.increments().primary()
      table.integer('boardSize')
      table.dateTime('finished_at')
      table.integer('statusId')
        .references('id')
        .inTable('statuses')
        .notNullable()
      table.timestamps(false, true)
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('games')
}
