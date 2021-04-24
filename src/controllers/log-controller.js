import Log from '../models/log'

const LogController = {
  index: async (req, res) => {
    const logs = await Log.query()
      .limit(20)
      .orderBy('created_at', 'desc')

    res.send(logs)
  },
}

export default LogController
