const mongoose = require('mongoose')

const transactionalSchema = new mongoose.Schema({
    course_id: {
        type: mongoose.Types.ObjectId
    },
    student_id: {
        type:  mongoose.Types.ObjectId
    }
})

const Transactional = mongoose.model('Transactional', transactionalSchema, 'transactionals')

module.exports = Transactional