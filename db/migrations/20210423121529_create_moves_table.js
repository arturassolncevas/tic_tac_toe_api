exports.up = function (knex) {
  return knex.schema
    .createTable('moves', (table) => {
      table.increments().primary()
      table.integer('moveNumber')
      table.integer('gameId')
        .references('id')
        .inTable('games')
        .notNullable()
      table.integer('typeId')
        .references('id')
        .inTable('move_types')
        .notNullable()
      table.timestamps(false, true)
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('moves')
}
