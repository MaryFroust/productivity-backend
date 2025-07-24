const { getAllHabits, createHabit, updateHabitById, deleteHabitById } = require("./controller/habitController");

const router = require('express').Router()


router.get('/get-all-habits', getAllHabits)
router.post('/create-habit',  createHabit )
router.put('/update-habit-by-id/:id', updateHabitById)
router.delete('/delete-habit-by-id/:id', deleteHabitById)



module.exports = router