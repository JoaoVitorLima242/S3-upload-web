export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string
      NODE_ENV: string
      AWS_BUCKET_NAME: string
      AWS_BUCKET_REGION: string
      AWS_ACCESS_KEY: string
      AWS_SECRET_KEY: string
    }
  }
}
