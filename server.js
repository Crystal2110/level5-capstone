const express = require("express")
const app = express()
const morgan = require('morgan')
require('dotenv').config()
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

async function connectToDb(){
 try {
     await mongoose.connect(process.env.MONGO_URI)
     console.log('Connect to DB')
 } catch (error) {
     console.log(error)
 }
}
connectToDb()

app.use("/api/disney", require("./routes/disneyRouter.js"))
app.use("/api/movies", require("./routes/movieRouter.js"))

app.use((err, req, res, next) => {
 console.log(err)
 return res.send({errMsg: err.message})
})

app.listen(8500, (err) => {
 console.log(`Server is running on Port 8500`)
})