import { Router } from 'express'
import multer from 'multer'

const upload = multer({ dest: './uploads/' })
const routes = Router()

routes.post('/', upload.single('image'), (req, res) => {
  const file = req.file
  const description = req.body.description

  console.log({
    file,
    description,
  })

  res.status(200).json({ message: 'Image!' })
})

export default routes
