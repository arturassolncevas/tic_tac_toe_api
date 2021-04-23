const environment = process.env.NODE_ENV || 'development'

module.exports = {
  name: `${environment}_db`,
  client: 'sqlite',
  connection: {
    filename: `${process.cwd()}/db/sqlite.${environment}.db`,
  },
  migrations: {
    directory: './db/migrations',
  },
  useNullAsDefault: true,
}
