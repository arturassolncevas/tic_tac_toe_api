exports.up = function (knex) {
  return knex.schema
    .createTable('logs', (table) => {
      table.increments().primary()
      table.integer('gameId')
        .references('id')
        .inTable('games')
        .notNullable()
      table.integer('type')
        .references('id')
        .inTable('log_types')
        .notNullable()
      table.text('message')
      table.json('params')
      table.timestamps(false, true)
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('logs')
}
