import { Model } from 'objection'

class Log extends Model {
  static get tableName() {
    return 'logs'
  }
}

export default Log
