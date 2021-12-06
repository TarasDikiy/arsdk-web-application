const {Schema, model, mongo} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    radius: {
        type: Number,
        required: true
    },
    index: {
        type: String,
        required:true
    }
})

module.exports = model('SDK', schema)