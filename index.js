const express = require("express")
const dotenv = require("dotenv")
const MongoDBConnection = require("./SERVER/Database/MongoDBConnection")
const cors = require("cors")




const app = express()
MongoDBConnection()






app.use(cors())
app.use(express.json())

dotenv.config({ path: "config.env" })
const PORT = process.env.PORT || 8080

app.use("/https://crudbackend.netlify.app/", require("./SERVER/Router/Routes"))

app.listen(PORT, () => { console.log(`Server is running on localhost: Port ${PORT}`) })