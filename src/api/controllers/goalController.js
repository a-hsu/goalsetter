const asyncHandler = require("express-async-handler")
// @desc    Get goals
// @route   GET api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get goal" })
})

// @desc    Set goals
// @route   POST api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
    const body = req.body
    console.log(body)
    if (!req.body.text) {
        res.status(400)
        throw new Error("add text field")
    }

    res.status(200).json({ message: "Set goal" })
})

// @desc    Update goal
// @route   PUT api/goals/:id
// @access  Private
const putGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Update goal ${req.params.id}`,
    })
})

// @desc    Delete goal
// @route   DELETE api/goals/:id
// @access  Private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Delete goal ${req.params.id}`,
    })
})

module.exports = {
    getGoals,
    setGoal,
    putGoals,
    deleteGoals,
}
