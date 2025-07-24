const Habit = require('../model/Habit')

const getAllHabits = async (req, res) => {
    try {
        const habits = await Habit.find({})
        res.json({ message: "Habits Found", payload: habits })
    } catch (error) {
        res.status(500).json({ message: "Error while fetching habits.", error: error.message })
    }
}

 const createHabit = async (req, res) => {
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

const updateHabitById = async (req, res) => {
    console.log("UPDATE!", req.params.id, req.body)
    try {
        const updateHabitList = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.json({ message: "Habit List Updated.", payload: updateHabitList })
    } catch (error) {
        res.status(500).json({ message: "Error while updating habits.", error: error.message })
    }
}

const deleteHabitById = async (req, res) => {
    try {
        const deletedHabitItem = await Habit.findByIdAndDelete(req.params.id)
        res.json({ message: "Habit Deleted.", payload: deletedHabitItem })
    } catch (error) {
        res.status(500).json({ message: "Error while deleting habits.", error: error.message })
    }
}

module.exports = {
    getAllHabits,
    createHabit,
    updateHabitById,
    deleteHabitById
}
