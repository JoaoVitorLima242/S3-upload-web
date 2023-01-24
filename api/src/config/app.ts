import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import IndexRoutes from '../routes/index.routes'
import ImageRoutes from '../routes/image.routes'

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
    this.express.use('/api/image', ImageRoutes)
    this.express.use('/api', IndexRoutes)
  }
}

export default new App().express
