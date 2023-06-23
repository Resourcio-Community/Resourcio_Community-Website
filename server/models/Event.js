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
        toJSON: {
            transform(doc, ret) {
                delete ret.createdAt
                delete ret.updatedAt
                delete ret.__v
            }
        },
        timestamps: true
    }
)

const Event = mongoose.model('Event', EventSchema)
export default Event