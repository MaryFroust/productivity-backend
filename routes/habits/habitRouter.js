const { getAllHabits, createHabit, updateHabitById, deleteHabitById, toggleDay} = require("./controller/habitController");

const router = require('express').Router()


router.get('/get-all-habits', getAllHabits)
router.post('/create-habit',  createHabit )

router.put('/toggle-day', toggleDay)
router.put('/update-habit-by-id/:id', updateHabitById)

router.delete('/delete-habit-by-id/:id', deleteHabitById)

//get by month
//toggle day(mo, yr, day)...search day and habitID

module.exports = router




// route.put('/toggle-day', async (req, res)=>{
//   try {//9
//     const {day, _id} = req.body
//     const foundHabit = await Habit.findById(_id)
//     let newArray
//     if(!foundHabit.daysCompleted.includes(day)){ // [1, 2, 3, 5, 6, 8, 9]
//       newArray = [...foundHabit.daysCompleted, day]
//     }else{
//       //if does exist
//       newArray = foundHabit.daysCompleted.filter(el => el !== day)
//     }
//     foundHabit.daysCompleted = newArray
//     await foundHabit.save()
//   } catch (error) {
    
//   }
// })