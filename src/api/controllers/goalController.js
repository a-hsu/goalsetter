const asyncHandler = require("express-async-handler")
const Goal = require("../models/Goal")
// @desc    Get goals
// @route   GET api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
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
    const goal = await Goal.create({
        text: body.text,
    })

    res.status(200).json(goal)
})

// @desc    Update goal
// @route   PUT api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error("Goal not found")
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedGoal)
})

// @desc    Delete goal
// @route   DELETE api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error("Goal not found")
    }
    const deletedGoal = await Goal.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedGoal)
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}
