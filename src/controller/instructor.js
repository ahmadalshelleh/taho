const Instructor = require('../models/instructor')

const getAllInstructors = async () => {
    try {
        return await Instructor.find({}, {'_id': 0, 'first_name': 1, 'last_name': 1})
    } catch (e) {
        return null;
    }
}

module.exports.getAllInstructors = getAllInstructors;