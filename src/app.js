import express from 'express'
import { setupRoutes } from './router'
import { setupObjection } from '../objection'
import { setupMiddleware } from './middleware/middleware'

const webServer = express()

class App {
  start() {
    setupObjection()
    setupMiddleware(webServer)
    setupRoutes(webServer)
    webServer.listen(3000, 'localhost', () => {
      console.log('Listening at localhost:3000')
    })
  }
}

new App().start()
