const mongoose = require('mongoose')
const alienSchema = new mongoose.Schema
({
    name:
    {
        type: String,
        require: true
    },
    tech:
    {
        type: String,
        required: true
    },
    sub:
    {
        type: String,
        require: true,
        default: false
    }
})

module.exports = mongoose.model('Alien',alienSchema)
