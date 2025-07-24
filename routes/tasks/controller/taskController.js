const Task = require('../model/Task')


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.json({ message: "Tasks Found", payload: tasks })
    } catch (error) {
        res.status(500).json({ message: "Error while fetching tasks.", error: error.message })
    }
}

async function createTask(req, res){
    try {
        const { name, year, month, user } = req.body
        
        const newTask = new Task({
            name,
            year, 
            month,
            user
        })
        await newTask.save()
        res.json({ message: "Task Created.", payload: newTask})
    } catch (error) {
         res.status(500).json({ message: "Server error.", error: error.message })
    }
}

const updateTaskById = async (req, res) => {
    console.log("UPDATE!", req.params.id, req.body)
    try {
        const updateTaskList = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.json({ message: "Task List Updated.", payload: updateTaskList })
    } catch (error) {
        res.status(500).json({ message: "Error while updating tasks.", error: error.message })
    }
}

const deleteTaskById = async (req, res) => {
    try {
        const deletedTaskItem = await Task.findByIdAndDelete(req.params.id)
        res.json({ message: "Task item Deleted.", payload: deletedTaskItem })
    } catch (error) {
        res.status(500).json({ message: "Error while deleting tasks.", error: error.message })
    }
}


module.exports = {
    getAllTasks,
    createTask,
    updateTaskById,
    deleteTaskById
}