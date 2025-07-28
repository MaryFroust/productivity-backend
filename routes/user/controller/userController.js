const User = require('../model/User')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function signup(req, res) {
    try {
        const { username, firstName, lastName, email, password } = req.body
        const { errorObj } = res.locals

        if (Object.keys(errorObj).length > 0) {
            res.status(400).json({ message: "Validation Error.", payload: errorObj })
        } else {
            const newUser = new User({
                username,
                firstName,
                lastName,
                email,
                password: await bcrypt.hash(password, 10)
            })
            await newUser.save()
            res.json({ message: "User Created.", payload: newUser })


        }
    } catch (error) {
        res.status(500).json({ message: "Server error.", error: error.message })
    }

}

const findUser = async (req, res) => {
    try {
        if (res.locals.decodedJwt.id) {
            const foundUser = await User.findById(res.locals.decodedJwt.id)
            res.json({ message: "User Found.", payload: foundUser })
        } else {
            res.status(400).json({ message: "Not Authorized." })
        }
    } catch (error) {
        res.status(500).json({ message: "error", error: error.message })
    }
}


const editUser = async (req, res) => {
    try {
        if (res.locals.decodedJwt.id === req.params.id) {
            const updateUser = await User.findByIdAndUpdate(req.params.id)
            res.json({ message: "User Updated", payload: updateUser })
        } else {
            res.status(400).json({ message: "Not Authorized." })
        }
    } catch (error) {
        res.status(500).json({ message: "error", error: error.message })
    }

}


const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const foundUser = await User.findOne({ email })
        if (!foundUser) {
            res.json({ message: "Username or password incorrect." })
        } else {
            const passwordMatch = await bcrypt.compare(password, foundUser.password)
            if (!passwordMatch) {
                res.json({ message: "Username or password incorrect." })

            } else {
                console.log(process.env.PRIVATE_JWT_KEY)
                const token = jwt.sign(
                    {
                        email: foundUser.email,
                        username: foundUser.username,
                        id: foundUser._id
                    },
                    process.env.PRIVATE_JWT_KEY,
                    {
                        expiresIn: '1d'
                    }

                )
                res.json({ message: "User logged in.", payload: token })
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error.", error: error.message })
    }
}

module.exports = {
    signup,
    login,
    findUser,
    editUser
}