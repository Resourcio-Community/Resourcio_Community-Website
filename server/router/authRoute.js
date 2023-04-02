import { Router } from "express"
const router = Router()

import * as authController from '../controllers/authControllers.js'


router.route('/register').post(authController.register)
router.route('/login').post(authController.login)


export { router }