const { getAllTasks, createTask, updateTaskById, deleteTaskById } = require("./controller/taskController");

const router = require('express').Router()


router.get('/get-all-tasks', getAllTasks)
router.post('/create-task', createTask )
router.put('/update-task-by-id/:id', updateTaskById)
router.delete('/delete-task-by-id/:id', deleteTaskById)



module.exports = router