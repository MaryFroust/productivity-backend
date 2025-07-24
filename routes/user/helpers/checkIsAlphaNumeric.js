const { isAlphanumeric } = require("validator")


function checkIsAlphaNumeric(req, res, next){
if (!isAlphanumeric(req.body.username)) {
      const{errorObj} = res.locals
            errorObj.username = "username must be alphanumeric"
            // res.json({ message: "username must be alphanumeric" })
        }
        next()
}


module.exports = checkIsAlphaNumeric
