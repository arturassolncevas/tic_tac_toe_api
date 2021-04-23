import { create } from './controllers/game-controller'

export const setupRoutes = (express) => {
  express.use('/', create)
}
