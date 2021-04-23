exports.up = function (knex) {
  return knex.schema
    .createTable('move_types', (table) => {
      table.integer('id')
      table.string('name')
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('move_types')
}
