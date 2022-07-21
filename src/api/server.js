const path = require("path")
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
app.use("/api/users", require("./Routes/users"))
app.use("/api/tasks", require("./Routes/tasks"))

// Serve Frontend
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../../frontend/build")))

    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "../../", "frontend", "build", "index.html")
        )
    })
} else {
    app.get("/", (req, res) => {
        res.send("Please set to production")
    })
}

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Port listening at port ${PORT}`)
})
