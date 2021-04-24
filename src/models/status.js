import { Model } from 'objection'

class Status extends Model {
  static get tableName() {
    return 'statuses'
  }
}

export default Status
