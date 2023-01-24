import { Router } from 'express'
import multer from 'multer'

const upload = multer({ dest: './uploads/' })
const routes = Router()

routes.post('/', upload.single('image'), (_, res) => {
  res.status(200).json({ message: 'Image!' })
})

export default routes
