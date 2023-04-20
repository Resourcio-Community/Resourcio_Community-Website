import mongoose from "mongoose"

const PastEventSchema = new mongoose.Schema({
    eventLink: {
        type: String,
        required: [true, 'Event link is required']
    }
},
    {
        timestamps: true
    }
)

const PastEvent = mongoose.model('PastEvent', PastEventSchema)
export default PastEvent