import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import IndexRoute from '../routes/index.routes'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares() {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(express.static('upload'))
    dotenv.config()
  }

  private database() {}

  private routes() {
    this.express.use('/', IndexRoute)
  }
}

export default new App().express
