const { createHabit } = require("./controller/habitController");

const router = require('express').Router()



router.post('/createHabit',
    createHabit
)



module.exports = router