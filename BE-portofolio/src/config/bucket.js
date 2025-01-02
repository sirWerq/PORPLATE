const Minio = require("minio")
const dotenv = require("dotenv")

dotenv.config()

const minioClient = new Minio.Client({
    endPoint: process.env.BUCKET_ENDPOINT,
    port: 80,
    useSSL: false,
    accessKey: process.env.BUCKET_ACCESS_KEY,
    secretKey: process.env.BUCKET_SECRET_KEY,
});

module.exports = { minioClient };