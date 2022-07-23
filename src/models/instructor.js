const mongoose = require('mongoose')
const { clear } = require('../cache/redis')

const instructorSchema = new mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    dob: {
        type: Date
    }
})

const Instructor = mongoose.model('Instructor', instructorSchema, 'instructors')

module.exports = Instructor