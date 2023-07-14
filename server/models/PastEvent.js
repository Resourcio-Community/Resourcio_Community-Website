import mongoose from "mongoose"

const PastEventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: [true, 'Event name is required']
    },
    eventLink: {
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

const PastEvent = mongoose.model('PastEvent', PastEventSchema)
export default PastEvent