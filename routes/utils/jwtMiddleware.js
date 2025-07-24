const jwt = require('jsonwebtoken')

function checkJwtToken(req, res, next){
    try {
        if(req.headers.authorization){
            const token = req.headers.authorization.slice(7)//Bearer (under the hood)
            const decoded = jwt.verify(token, process.env.PRIVATE_JWT_KEY)
            res.locals.decodedJwt = decoded //save to jwt IF verified
            next()
        }else{
            throw { message: "YOu don't have permission!", statusCode: 500}
        }
    } catch (error) {
        res.status(500).json({message: error.message, error})
    }
}


module.exports = checkJwtToken