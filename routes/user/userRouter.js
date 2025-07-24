const { signup, login,findUser, editUser } = require('./controller/userController')
const checkIsUndefined = require('./helpers/checkIsUndefined')
const checkIsEmpty = require('./helpers/checkIsEmpty')
const checkIsAlpha = require('./helpers/checkIsAlpha')
const checkIsAlphaNumeric = require('./helpers/checkIsAlphaNumeric')
const checkIsEmail = require('./helpers/checkIsEmail')
const checkJwtToken = require('../utils/jwtMiddleware')
const router = require('express').Router()


router.post('/signup',
    checkIsUndefined,
    checkIsEmpty,
    checkIsAlphaNumeric,
    checkIsEmail,
    checkIsAlpha,
    signup)

router.post('/login', checkIsUndefined, checkIsEmpty, login)

router.get('/get-user' ,checkJwtToken, findUser)

router.put('/edit-user-by-id/:id', checkJwtToken, editUser)

module.exports = router
