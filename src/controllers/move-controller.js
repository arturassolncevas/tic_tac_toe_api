import MoveType from '../models/move-type'
import Move from '../models/move'
import Log from '../models/log'

const MoveController = {
  create: async (req, res) => {
    const {
      type,
      gameId,
      position,
      moveNumber,
    } = req.body

    const moveType = await MoveType.query()
      .where('name', type)
      .first()

    const move = await Move.query()
      .insertAndFetch({
        gameId,
        moveNumber,
        typeId: moveType.id,
      })

    const log = await Log.query()
      .insert({
        type: 0,
        gameId,
        params: {
          position,
        },
        message: `Game ${gameId}:`
          + ` Player ${move.typeId === 0 ? '1' : '2'}`
          + ` moved ${JSON.stringify(position)},`
          + ` move number: ${move.moveNumber}`,
      })

    res.send({
      log,
    })
  },
}

export default MoveController
