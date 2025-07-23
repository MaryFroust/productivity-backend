const Habit = require('../model/Habit')



async function createHabit(req, res){
    try {
        const { name, year, month, user } = req.body
        
        const newHabit = new Habit({
            name,
            year, 
            month,
            user
        })
        await newHabit.save()
        res.json({ message: "Habit Created.", payload: newHabit})
    } catch (error) {
         res.status(500).json({ message: "Server error.", error: error.message })
    }
}

module.exports = {
    createHabit,
}
