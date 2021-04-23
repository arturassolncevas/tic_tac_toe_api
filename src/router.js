import express from 'express'
import { create } from './controllers/game-controller'

export const setupRoutes = (app) => {
  const router = express.Router()

  router.get('/games', create)

  app.use('/api/v1/', router)
}
