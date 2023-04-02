import mongoose from "mongoose"

const EventSchema = new mongoose.Schema({
    event: {
        type: String,
        required: [true, 'Event is required']
    },
    link: {
        type: String,
        required: [true, 'Event link is required']
    }
},
    {
        timestamps: true
    }
)

const Event = mongoose.model('Event', EventSchema)
export default Event