import * as dotenv from 'dotenv'

dotenv.config()

export const config: {
  port: number
  aws_access_key_id: string
  aws_secret_access_key: string
  bucket_name: string
  bucket_region: string
} = {
  port: Number(process.env.PORT) ?? 8080,
  aws_access_key_id: String(process.env.AWS_ACCESS_KEY),
  aws_secret_access_key: String(process.env.AWS_ACCESS_KEY),
  bucket_name: String(process.env.AWS_BUCKET_NAME),
  bucket_region: String(process.env.AWS_BUCKET_REGION),
}
