const mongoose = require('mongoose')
const { clear } = require('../cache/redis')

const courseSchema = new mongoose.Schema({
    name: {
        type: String
    },
    instructor_id: {
        type: mongoose.Types.ObjectId
    }
})

const Course = mongoose.model('Course', courseSchema, 'courses')

module.exports = Course