import { Model } from 'objection'

class Move extends Model {
  static get tableName() {
    return 'moves'
  }
}

export default Move
