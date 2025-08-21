const Habit = require('../model/Habit')


const createHabit = async (req, res) => {
    try {
        const { id } = res.locals.decodedJwt
        const { name, year, month,} = req.body
        const currentDate = new Date()
        const habitYear = year || currentDate.getFullYear()
        const habitMonth = month || currentDate.getMonth() + 1

        const newHabit = new Habit({
            name,
            year: habitYear,
            month: habitMonth,
            user: id
        })

        await newHabit.save()
        res.json({ message: "Habit Created.", payload: newHabit })
    } catch (error) {
        res.status(500).json({ message: "Server error.", error: error.message })
    }
}


const toggleDay = async (req, res) => {
    try {
        const { day, habitId } = req.body
        const foundHabit = await Habit.findById(habitId)
        let newArray
        if (!foundHabit.daysCompleted.includes(day)) {
            newArray = [...foundHabit.daysCompleted, day]
        } else {
            newArray = foundHabit.daysCompleted.filter(el => el !== day)
        }
        foundHabit.daysCompleted = newArray
        await foundHabit.save()
        res.json({ message: "Success" })
    } catch (error) {
        res.status(500).json({ message: "Error toggling day.", error: error.message })
    }
}

const getHabitsByMonth = async (req, res) => {
    try {
        console.log("Request body:", req.body)
        console.log("Decoded JWT:", res.locals.decodedJwt);

        const { month, year } = req.body
        const { id } = res.locals.decodedJwt
        const foundHabits = await Habit.find({ user: id, month, year })
        res.json({ message: "Habit retrieved successfully", payload: foundHabits })
    } catch (error) {
        res.status(500).json({ message: "Error getting habit.", error: error.message })
    }
}


const updateHabitById = async (req, res) => {
    console.log("UPDATE!", req.params.id, req.body)
    try {
        const updateHabitList = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updateHabitList) {
            return res.status(404).json({ message: "Habit not found." })
        }
        res.json({ message: "Habit List Updated.", payload: updateHabitList })
    } catch (error) {
        res.status(500).json({ message: "Error while updating habits.", error: error.message })
    }
}

const deleteHabitById = async (req, res) => {
    try {
        const deletedHabit = await Habit.findByIdAndDelete(req.params.id)
        if (!deletedHabit) {
            return res.status(404).json({ message: "Habit not found." })
        }
        res.json({ message: "Habit Deleted.", payload: deletedHabit })
    } catch (error) {
        res.status(500).json({ message: "Error while deleting habits.", error: error.message })
    }
}

module.exports = {
    createHabit,
    toggleDay,
    getHabitsByMonth,
    updateHabitById,
    deleteHabitById,
}
