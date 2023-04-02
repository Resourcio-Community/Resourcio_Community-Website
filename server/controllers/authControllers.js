import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'


// REGISTER
export async function register (req, res) {
    const { name, username, email, password } = req.body

    const newUser = new User({
        name: name,
        username: username,
        email: email,
        password: CryptoJS.AES.encrypt(
            password,
            process.env.SECRET_KEY
        ).toString()
    })

    try {
        const user = await newUser.save()
        res.status(201).json({ user, status: 'User created successfully' })
    }
    catch (error) {
        let message = {}
        Object.entries(error.errors).forEach(([key, val]) => {
            message = { ...message, [key]: val.message }
        })
        res.status(500).json(message)
    }
}


// LOGIN
export async function login (req, res) {
    const { email } = req.body

    try {
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(401).json('User not found')
        }

        const decrypted = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)
        const originalPassword = decrypted.toString(CryptoJS.enc.Utf8)

        if (originalPassword !== req.body.password) {
            return res.status(401).json('Wrong Password')
        }

        const accessToken = jwt.sign(
            { id: user._id },
            process.env.SECRET_KEY,
            { expiresIn: '5d' }
        )

        const { password, _id, createdAt, updatedAt, __v, ...info } = user._doc

        res.status(200).json({ ...info, accessToken })
        res.end()
    }
    catch (error) {
        res.status(500).json(error)
    }
}