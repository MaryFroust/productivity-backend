const { 
    getAllGoals,
    createGoal, 
    updateGoalById,
     deleteGoalById, 
    //   getGoalsByMonth 
    } = require("./controller/goalController");

const router = require('express').Router()
const jwtMiddleWare = require('../utils/jwtMiddleWare')


router.get('/get-all-goals', getAllGoals)
router.post('/create-goal', jwtMiddleWare, createGoal)
router.put('/update-goal-by-id/:id', updateGoalById)
router.delete('/delete-goal-by-id/:id', deleteGoalById)

// router.post('/get-goals-by-month',jwtMiddleWare, getGoalsByMonth)

module.exports = router