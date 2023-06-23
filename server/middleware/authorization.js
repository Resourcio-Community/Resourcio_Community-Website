import jwt from "jsonwebtoken"

export default async function verifyToken(req, res, next) {
    try {
        // access authorization header to validate request
        const token = req.headers.authorization.split(' ')[1]

        // retrieve the user details to the logged in user
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) return res.status(403).json('Token is not valid')
            req.user = user

            next()
        })
    }
    catch (error) {
        return res.status(401).json({ error: 'Authentication Failed' })
    }
}




export function localVariables(req, res, next) {
    req.app.locals = {
        OTP: null,
        resetSession: false
    }
    next()
}