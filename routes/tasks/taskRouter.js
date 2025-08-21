const {     
    createTask,    
    updateTaskById,
    deleteTaskById,
    getAllTasks,
    // completedTask,
   
    getTasksByMonth
} = require("./controller/taskController")

const jwtMiddleWare = require('../utils/jwtMiddleWare')

const router = require('express').Router()

router.post('/create-task',jwtMiddleWare, createTask)
router.put('/update-task-by-id/:id', updateTaskById)
router.delete('/delete-task-by-id/:id', deleteTaskById)
router.get('/get-all-tasks', getAllTasks)
// router.post('/completed-task', completedTask)

router.post('/get-tasks-by-month',jwtMiddleWare, getTasksByMonth)



module.exports = router