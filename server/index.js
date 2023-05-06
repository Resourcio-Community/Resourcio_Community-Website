import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


import { router as authRouter } from './router/authRoute.js'
import { router as eventRouter } from './router/eventRoute.js'



const app = express()

dotenv.config()
mongoose.set('strictQuery', true)
app.use(express.json())
app.use(cors({ origin: '*' }))
app.use(morgan('tiny'))




app.use('/api/auth', authRouter)
app.use('/api/event', eventRouter)



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
    .catch((error) => {
        console.log(error.message)
    })