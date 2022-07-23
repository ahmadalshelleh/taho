const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    major: {
        type: String,
        required: true
    }
})

const Student = mongoose.model('Student', studentSchema, 'students')

module.exports = Student