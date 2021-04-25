import Status from '../models/status'
import Game from '../models/game'
import Log from '../models/log'

const GameController = {
  create: async (req, res, next) => {
    try {
      const { boardSize } = req.body

      const status = await Status.query()
        .where('name', 'started')
        .first()

      const game = await Game.query()
        .insert({
          boardSize,
          statusId: status.id,
        })

      const log = await Log.query()
        .insertAndFetch({
          gameId: game.id,
          type: 2,
          message: `Game ${game.id}: status - ${status.text}`,
        })

      res.send({
        id: game.id,
        log,
      })
    } catch (e) {
      next(e)
    }
  },

  update: async (req, res, next) => {
    try {
      const {
        id,
        status: uiStatus,
      } = req.body

      const status = await Status.query()
        .where('name', uiStatus)
        .first()

      await Game.query()
        .findById(id)
        .patch({
          statusId: status.id,
        })

      const log = await Log.query()
        .insertAndFetch({
          type: 2,
          gameId: id,
          message: `Game ${id}: status - ${status.text}`,
        })

      res.send({ log })
    } catch (e) {
      next(e)
    }
  },
}

export default GameController
