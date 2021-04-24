import { Model } from 'objection'

class MoveType extends Model {
  static get tableName() {
    return 'move_types'
  }
}

export default MoveType
