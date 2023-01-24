import S3, { PutObjectRequest } from 'aws-sdk/clients/s3'
import fs from 'fs'

import { config } from '../config/vars'

class S3Integration {
  private s3: S3

  constructor() {
    this.s3 = new S3({
      region: config.bucket_region,
      accessKeyId: config.aws_access_key_id,
      secretAccessKey: config.aws_secret_access_key,
    })
  }

  // Uploads a file to s3
  public uploadFile(file: Express.Multer.File) {
    const fileStream = fs.createReadStream(file.path)

    console.log(config, 'config')

    const uploadParams: PutObjectRequest = {
      Bucket: config.bucket_name,
      Body: fileStream,
      Key: file.filename,
    }

    console.log(this.s3)

    return this.s3.upload(uploadParams).promise()
  }
}

export default new S3Integration()

// downloads a file from s3
