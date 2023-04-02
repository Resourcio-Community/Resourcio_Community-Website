import Event from "../models/Event.js"


// CREATE AN EVENT
export async function createEvent(req, res) {
    const { event, link } = req.body

    const newEvent = new Event({
        event,
        link
    })

    try {
        const event = await newEvent.save()
        res.status(201).json({ event, msg: 'Event added' })
    }
    catch (error) {
        res.status(500).json(error)
    }
}



// GET ALL EVENTS
export async function getEvents(req, res) {
    try {
        const events = await Event.find({})

        res.status(200).json(events)
    }
    catch (error) {
        res.status(500).json(error)
    }
}