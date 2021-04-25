import express from 'express'
import { setupRoutes } from './router'
import { setupObjection } from '../objection'
import { setupMiddleware } from './middleware/middleware'

const port = 3000
const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.0.0.1'
export const webServer = express()

class App {
  start() {
    setupObjection()
    setupMiddleware(webServer)
    setupRoutes(webServer)
    webServer.listen(port, host, () => {
      console.log(`Listening at ${host}:${port}`)
    })
  }
}

new App().start()
