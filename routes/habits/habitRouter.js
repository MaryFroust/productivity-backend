const { createHabit,  toggleDay, getHabitsByMonth, updateHabitById, deleteHabitById, } = require("./controller/habitController");
const jwtMiddleware = require('../utils/jwtMiddleWare');

const router = require('express').Router()

router.post('/create-habit', jwtMiddleware, createHabit )
router.put('/toggle-day', toggleDay)
router.post('/get-habits-by-month',  jwtMiddleware, getHabitsByMonth)
router.put('/update-habit-by-id/:id', updateHabitById)
router.delete('/delete-habit-by-id/:id', deleteHabitById)

//get by month
//toggle day(mo, yr, day)...search day and habitID

module.exports = router




