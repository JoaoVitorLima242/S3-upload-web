import { Router } from 'express'
import multer from 'multer'

import S3 from '../integrations/S3'

const upload = multer({ dest: './uploads/' })
const routes = Router()

routes.post('/', upload.single('image'), async (req, res) => {
  try {
    const file = req.file
    if (!file) throw 'Error'

    const description = req.body.description

    const result = await S3.uploadFile(file)
    console.log(result)
    res.status(200).json({ message: 'Image!' })
  } catch (error) {
    console.log(error, 'error')
  }
})

export default routes
