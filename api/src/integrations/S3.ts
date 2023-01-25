import S3, { GetObjectRequest, PutObjectRequest } from 'aws-sdk/clients/s3'
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
  public uploadFile = (file: Express.Multer.File) => {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams: PutObjectRequest = {
      Bucket: config.bucket_name,
      Body: fileStream,
      Key: file.filename,
    }

    return this.s3.upload(uploadParams).promise()
  }

  // downloads a file from s3
  public getFileStream = (fileKey: string) => {
    const downloadParams: GetObjectRequest = {
      Key: fileKey,
      Bucket: config.bucket_name,
    }

    return this.s3.getObject(downloadParams).createReadStream()
  }
}

export default new S3Integration()

// downloads a file from s3
