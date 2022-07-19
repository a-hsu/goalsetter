const express = require("express")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")

connectDB()

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/goals", require("./Routes/goals"))

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Port listening at port ${PORT}`)
})
