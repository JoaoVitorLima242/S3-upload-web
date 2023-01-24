import { Router } from 'express'
import multer from 'multer'

import S3 from '../integrations/S3'

const upload = multer({ dest: './uploads/' })
const routes = Router()

routes.post('/', upload.single('image'), async (req, res) => {
  const file = req.file
  if (!file) throw 'Error'

  const description = req.body.description

  await S3.uploadFile(file)
    .then(res => console.log(res))
    .catch(res => console.log(res))

  res.status(200).json({ message: 'Image!' })
})

export default routes
