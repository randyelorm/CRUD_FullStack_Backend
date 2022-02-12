const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config({ path: "config.env" })

const ConnectToMongoDB = async () => {

    try {

        const mongoConnection = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Successfully connected to mongoDB: ${mongoConnection.connection.host}`)

    }

    catch (error) {
        console.log(error.message)
    }



}

module.exports = ConnectToMongoDB