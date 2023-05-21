export default {
    port : process.env.APP_PORT,
    dbUri : `mongodb://localhost:27017/${process.env.DB_NAME}`
}