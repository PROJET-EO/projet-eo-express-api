export default {
    port : parseInt(`${process.env.APP_PORT}`,10)  || 8080,
    dbUri : `mongodb://localhost:27017/${process.env.DB_NAME}`
}