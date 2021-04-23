import { Model } from 'objection'

class Game extends Model {
  static get tableName() {
    return 'games'
  }
}

export default Game
