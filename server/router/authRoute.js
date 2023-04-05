import { Router } from "express"
const router = Router()

import * as authController from '../controllers/authControllers.js'
import verifyToken, { localVariables } from "../middleware/authorization.js"
import { registerMail } from "../controllers/mail.js"


router.route('/register').post(authController.register)
router.route('/login').post(authController.login)
router.route('/registerMail').post(registerMail)



router.route('/user/:username').get(authController.getUser)
router.route('/generateOTP').get(authController.verifyUser, localVariables, authController.generateOTP)
router.route('/verifyOTP').get(authController.verifyUser, authController.verifyOTP)
router.route('/createresetsession').get(authController.createResetSession)



router.route('/resetpassword').put(authController.verifyUser, authController.resetPassword)
router.route('/updateuser').put(verifyToken, authController.updateUser)



export { router }