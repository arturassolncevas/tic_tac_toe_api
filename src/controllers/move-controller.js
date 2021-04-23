import Move from '../models/move'
import Log from '../models/log'

const MoveController = {
  create: async (req, res) => {
    const {
      type,
      gameId,
      position,
    } = req.body

    await Move.query().insert({
      gameId,
      typeId: type,
    })

    const log = await Log.query().insert({
      type,
      gameId,
      message: `Player ${type === 0 ? 'X' : 'O'} moved ${JSON.stringify(position)}`,
      params: {
        position,
      },
    })

    res.send({
      log,
    })
  },
}

export default MoveController
