const { isAlpha } = require("validator")


function checkIsAlpha(req, res, next) {
    if (!isAlpha(req.body.firstName) || !isAlpha(req.body.lastName)) {
        const { errorObj } = res.locals
        errorObj.nameError = "First and Last name must be alphabetical."//saves into res.locals
    }
    next()
}

module.exports = checkIsAlpha