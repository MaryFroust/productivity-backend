const Task = require('../model/Task')




// const completedTask = async (req, res) => {
//   try {
//     const { id } = req.params;

//     await axios.post(`https://api.todoist.com/rest/v2/tasks/${id}/close`, null, {
//       headers: {
//         Authorization: `Bearer ${process.env.TODOIST_API_KEY}`,
//       },
//     })

//     res.json({ message: "Task marked as complete." })
//   } catch (error) {
//     res.status(500).json({ message: "Error completing task.", error: error.message });
//   }
// }

const getTasksByMonth = async (req, res) => {
    try {
        const { month, year } = req.body;
        const startDate = new Date(year, month - 1, 1)
        const { id } = res.locals.decodedJwt
        const endDate = new Date(year, month, 0, 23, 59, 59, 999)

        const tasks = await Task.find({
            user: id,
            dueDate: {
                $gte: startDate,
                $lte: endDate
            }
        })
        res.json({ message: "Tasks retrieved successfully.", payload: tasks })
    } catch (error) {
        res.status(500).json({ message: "Error retrieving tasks.", error: error.message })
    }
}



const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.json({ message: "Tasks Found", payload: tasks })
    } catch (error) {
        res.status(500).json({ message: "Error while fetching tasks.", error: error.message })
    }
}

const createTask = async (req, res) => {
    try {
        const { id } = res.locals.decodedJwt
        const { name, dueDate, priority, status, description } = req.body
        // const currentDate = new Date()

        const newTask = new Task({
            name,
            user: id,
            // dueDate: dueDate ,
            dueDate,
            // priority: priority,
            priority,
            // status: status,
            status,
            // description: description
            description
        })
        await newTask.save()
        res.json({ message: "New Task Created.", payload: newTask })
    } catch (error) {
        res.status(500).json({ message: "Server error.", error: error.message })
    }
}

const updateTaskById = async (req, res) => {
    console.log("UPDATE!", req.params.id, req.body)
    try {
        const updateTaskList = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
        console.log(updateTaskList)
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
    deleteTaskById,
    getTasksByMonth,
}