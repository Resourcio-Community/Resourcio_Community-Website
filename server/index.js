const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const authRoute = require('./routes/auth')

dotenv.config()

mongoose.set('strictQuery', true)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api/auth', authRoute)


const port = process.env.PORT || 3000
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Database Connected')
        app.listen(port, () => {
            console.log(`Server connected: ${port}`)
        })
    })
    .catch((error) =>{
    console.log(error.message)
})