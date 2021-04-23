import Log from '../models/log'

const LogController = {
  index: async (req, res) => {
    const logs = await Log.query()
    res.send(logs)
  },
}

export default LogController
