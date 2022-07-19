const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please add a valid username"],
        },
        email: {
            type: String,
            required: [true, "Please add a valid email"],
        },
        password: {
            type: String,
            required: [true, "Please add a valid email"],
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("User", userSchema)
