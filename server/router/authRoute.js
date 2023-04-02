import { Router } from "express"
const router = Router()

import * as authController from '../controllers/authControllers.js'
import { registerMail } from "../controllers/mail.js"


router.route('/register').post(authController.register)
router.route('/login').post(authController.login)
router.route('/registerMail').post(registerMail)


export { router }