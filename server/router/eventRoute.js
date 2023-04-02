import { Router } from "express"
const router = Router()

import * as eventController from '../controllers/eventControllers.js'


router.route('/createevent').post(eventController.createEvent)
router.route('/getevents').get(eventController.getEvents)


export { router }