const express = require('express')
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

const app = express()

// REGISTER
app.post('/register', async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password.toString(),
            process.env.SECRET_KEY
        ).toString()
    })

    try {
        const user = await newUser.save()
        res.status(201).json(user)
    }
    catch (error) {
        res.status(500).json(error.message)
    }
})


// LOGIN
app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(401).json('User not found!')
        }

        const decrypted = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)
        const originalPassword = decrypted.toString(CryptoJS.enc.Utf8)

        if (originalPassword !== req.body.password) {
            return res.status(401).json('Wrong Password!')
        }

        const { password, _id, ...info } = user._doc

        res.status(200).json({ ...info })
        res.end()
    }
    catch (error) {
        res.status(500).json(error)
    }
})



module.exports = app