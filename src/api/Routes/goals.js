const express = require("express")
const router = express.Router()
const {
    getGoals,
    setGoal,
    putGoals,
    deleteGoals,
} = require("../controllers/goalController")

router.get("/", getGoals)
router.post("/", setGoal)
router.put("/:id", putGoals)
router.delete("/:id", deleteGoals)

module.exports = router
