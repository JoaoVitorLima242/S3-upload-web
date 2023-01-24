import S3, { PutObjectRequest } from 'aws-sdk/clients/s3'
import fs from 'fs'

const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
})

// Uploads a file to s3
export const uploadFile = (file: Express.Multer.File) => {
  const bucketName = process.env.AWS_BUCKET_NAME
  const fileStream = fs.createReadStream(file.path)

  const uploadParams: PutObjectRequest = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  }
  console.log(uploadParams)

  return s3.upload(uploadParams).promise()
}
// downloads a file from s3
