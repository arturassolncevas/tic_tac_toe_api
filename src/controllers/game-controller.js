import Game from '../models/game'
import Log from '../models/log'

const GameController = {
  create: async (req, res) => {
    const {
      boardSize,
      status,
    } = req.body

    const game = await Game.query().insert({
      boardSize,
      resultId: status,
    })

    const log = await Log.query().insert({
      gameId: game.id,
      type: 2,
      message: 'Game started',
    })

    res.send({ gameId: game.id, log })
  },
}

export default GameController
