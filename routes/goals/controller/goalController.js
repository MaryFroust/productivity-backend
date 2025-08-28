const Goal = require('../model/Goal')

const getAllGoals = async (req, res) => {
    try {
        const goals = await Goal.find({})
        res.json({ message: "Goals Found", payload: goals })
    } catch (error) {
        res.status(500).json({ message: "Error while fetching goals.", error: error.message })
    }
}

const createGoal = async (req, res) => {
    try {
        const { id } = res.locals.decodedJwt
        const {
            name,
            startDate,
            endDate,
            actionPlan,
            obstacles,
            solutions,
            notes,
            why, 
        } = req.body
        const newGoal = new Goal({
            name,
            user: id,
            startDate,
            endDate,
            actionPlan,
            obstacles,
            solutions,
            notes,
            why
        })
        await newGoal.save()
        res.json({ message: "New Goal Created.", payload: newGoal })
    } catch (error) {
        res.status(500).json({ message: "Error while creating goals.", error: error.message })
    }
}

const updateGoalById = async (req, res) => {
    console.log("UPDATE!", req.params.id, req.body)
    try {
        const updateGoalList = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.json({ message: "Goal List Updated.", payload: updateGoalList })
    } catch (error) {
        res.status(500).json({ message: "Error while updating goals.", error: error.message })
    }
}

const deleteGoalById = async (req, res) => {
    try {
        const deletedGoalItem = await Goal.findByIdAndDelete(req.params.id)
        res.json({ message: "Goal Deleted.", payload: deletedGoalItem })
    } catch (error) {
        res.status(500).json({ message: "Error while deleting goals.", error: error.message })
    }
}

module.exports = {
    getAllGoals,
    createGoal,
    updateGoalById,
    deleteGoalById
}
