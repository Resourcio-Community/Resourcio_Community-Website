const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const authRoute = require('./routes/auth')

dotenv.config()

mongoose.set('strictQuery', true)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('frontend'))
app.use(express.json())
app.use('/api/auth', authRoute)



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/frontend/login.html')
})

app.get('/resources', (req, res) => {
    res.sendFile(__dirname + '/frontend/resource.html')
})


const port = process.env.PORT || 3000
mongoose.connect("mongodb://localhost:27017/resourcioDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database Connected')
    app.listen(port, () => {
        console.log(`Server connected: ${port}`)
    })
})
    .catch((error) => {
        console.log(error.message)
    })