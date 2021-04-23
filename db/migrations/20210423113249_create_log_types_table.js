exports.up = function (knex) {
  return knex.schema
    .createTable('log_types', (table) => {
      table.integer('id')
      table.string('name')
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('log_types')
}
