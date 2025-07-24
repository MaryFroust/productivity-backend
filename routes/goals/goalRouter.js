const { getAllGoals,createGoal, updateGoalById, deleteGoalById } = require("./controller/goalController");

const router = require('express').Router()


router.get('/get-all-goals', getAllGoals)
router.post('/create-goal',  createGoal)
router.put('/update-goal-by-id/:id', updateGoalById)
router.delete('/delete-goal-by-id/:id', deleteGoalById)



module.exports = router