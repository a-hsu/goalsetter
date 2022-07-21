const mongoose = require("mongoose")

const taskSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please add a title"],
        },
        description: {
            type: String,
        },
        isActive: {
            type: Boolean,
            required: true,
        },
        isCompleted: {
            type: Boolean,
            required: true,
        },
        // frequencyType (Once, daily,
        // weekly, monthly, annually, custom)
        order: {
            type: Number,
            required: true,
        },
        reminders: {},
        isArchived: {
            type: Boolean,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Task", taskSchema)
