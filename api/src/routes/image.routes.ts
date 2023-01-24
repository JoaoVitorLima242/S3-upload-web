import { Router } from 'express'
import multer from 'multer'

import { uploadFile } from '../integrations/S3'

const upload = multer({ dest: './uploads/' })
const routes = Router()

routes.post('/', upload.single('image'), async (req, res) => {
  const file = req.file
  if (!file) throw 'Error'

  const description = req.body.description

  const result = await uploadFile(file)
  console.log(result)

  res.status(200).json({ message: 'Image!' })
})

export default routes
