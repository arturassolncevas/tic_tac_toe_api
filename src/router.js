import express from 'express'
import gameController from './controllers/game-controller'
import moveController from './controllers/move-controller'
import logController from './controllers/log-controller'

export const setupRoutes = (app) => {
  const router = express.Router()

  router.get('/logs', logController.index)
  router.post('/games', gameController.create)
  router.post('/moves', moveController.create)
  router.patch('/games/:id', gameController.update)

  app.use('/api/v1/', router)
}
