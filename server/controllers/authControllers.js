import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import otpGenerator from 'otp-generator'



export async function verifyUser(req, res, next) {
    try {
        const { username } = req.method === 'GET' ? req.query : req.body

        let exist = await User.findOne({ username })
        if (!exist) return res.status(404).json({ error: 'Username not found' })

        next()
    }
    catch (error) {
        return res.status(404).json({ error: 'Authentication Error' })
    }
}



// REGISTER
export async function register(req, res) {
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
export async function login(req, res) {

    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(401).json('User not found')
        }

        const decrypted = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)
        const originalPassword = decrypted.toString(CryptoJS.enc.Utf8)

        if (originalPassword !== req.body.password) {
            return res.status(401).json('Wrong Password')
        }

        /* Create JWT token */
        const accessToken = jwt.sign(
            {
                userId: user._id,
                username: user.username
            },
            process.env.SECRET_KEY,
            { expiresIn: '4d' }
        )

        const { _id, username, email, password, isAdmin, createdAt, updatedAt, __v, ...info } = user._doc

        return res.status(200).json({ ...info, accessToken })
    }
    catch (error) {
        res.status(500).json(error)
    }
}


export async function getUser(req, res) {
    const { username } = req.params

    try {
        if (!username) return res.status(501).json({ error: 'Username not provided' })

        User.findOne({ username })
            .then((user) => {
                if (!user) return res.status(501).json({ error: "Couldn't find user" })

                const { password, ...info } = user._doc
                return res.status(200).json(info)
            })
            .catch((error) => {
                return res.status(500).json(error)
            })
    }
    catch (error) {
        return res.status(404).json({ error: "Can't find user data" })
    }
}


export async function generateOTP(req, res) {
    req.app.locals.OTP = await otpGenerator.generate(6,
        {
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false
        }
    )

    res.status(201).json({ code: req.app.locals.OTP })
}


export async function verifyOTP(req, res) {
    const { code } = req.query
    if (!code) return res.status(400).json({ error: "OTP isn't provided" })

    if (parseInt(req.app.locals.OTP) === parseInt(code)) {
        req.app.locals.OTP = null
        req.app.locals.resetSession = true

        return res.status(201).json({ msg: 'Verified Successfully' })
    }
    return res.status(400).json({ error: 'Invalid OTP' })
}


export async function createResetSession(req, res) {
    if (req.app.locals.resetSession) {
        return res.status(201).json({ flag: req.app.locals.resetSession })
    }
    return res.status(404).json({ error: 'Session Expired' })
}


export async function resetPassword(req, res) {
    try {
        if (!req.app.locals.resetSession) return res.status(404).json({ error: 'Session Expired' })

        const { username, password } = req.body

        try {
            User.updateOne(
                { username },
                {
                    password: CryptoJS.AES.encrypt(
                        password,
                        process.env.SECRET_KEY
                    ).toString()
                }
            )
                .then((data) => {
                    return res.status(201).json({ msg: 'Password Updated' })
                })
                .catch((err) => {
                    throw err
                })
            req.app.locals.resetSession = false
        }
        catch (error) {
            return res.status(500).json(error)
        }
    }
    catch (error) {
        return res.status(401).json(error)
    }
}


export async function updateUser(req, res) {
    try {
        // const userId = req.query.id
        const { userId } = req.user

        if (userId) {
            const body = req.body

            User.updateOne({ _id: userId }, body)
                .then((data) => {
                    return res.status(201).json({ msg: 'Record Updated' })
                })
                .catch((err) => {
                    throw err
                })
        }
        else {
            return res.status(401).json({error: 'User not found'})
        }
    }
    catch (error) {
        res.status(401).json(error)
    }
}