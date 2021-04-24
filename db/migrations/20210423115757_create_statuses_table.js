exports.up = function (knex) {
  return knex.schema
    .createTable('statuses', (table) => {
      table.integer('id')
      table.string('name')
      table.string('text')
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('statuses')
}
