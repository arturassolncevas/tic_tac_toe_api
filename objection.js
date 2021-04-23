import Knex from 'knex'
import { Model } from 'objection'
import knexConfig from './knexfile.config'

export const setupObjection = () => {
  const knex = Knex(knexConfig)
  Model.knex(knex)
}
