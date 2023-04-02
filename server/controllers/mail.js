import nodemailer from 'nodemailer'
import Mailgen from 'mailgen'
import dotenv from 'dotenv'

dotenv.config()


let nodeConfig = {
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
}

let transporter = nodemailer.createTransport(nodeConfig)

let MailGenerator = new Mailgen({
    theme: 'default',
    product: {
        name: 'Resourcio Community',
        link: 'https://www.linkedin.com/company/resourcio-community2022/'
    }
})

export const registerMail = async (req, res) => {
    const { username, userEmail, text, subject } = req.body

    var email = {
        body: {
            name: username,
            signature: false,
            intro: text || 'Hey there, way to Resourcio Community',
            outro: "Don't hesitate to ask, we'd love to help."
        }
    }

    var emailBody = MailGenerator.generate(email)

    let message = {
        from: process.env.EMAIL,
        to: userEmail,
        subject: subject || 'Email verified successfully',
        html: emailBody
    }

    transporter.sendMail(message)
        .then(() => {
            return res.status(200).json({ msg: 'You should receive an email' })
        })
        .catch((error) => {
            return res.status(500).json(error)
        })
}