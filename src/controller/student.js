const Student = require('../models/student')
const { ObjectId } = require('mongodb');

const createStudent = async (body) => {
    const student = new Student(body)

    try {
        console.log(student)
        return await student.save()
    } catch(e) {
        console.log(e)
        return null
    }
}

const getStudentById = async (id) => {
    try {
        return await Student.findById(ObjectId(id))
    } catch (e) {
        return null;
    }
}

const getAllDataForStudent = async(id) => {
    const match = {
        $match: {
            _id: ObjectId(id)
        }
    }

    const lookup = {
        $lookup: {
            from: "transactionals",
            let: { student_id: "$_id" },
            pipeline: [
              { $match: { $expr: { $eq: ["$$student_id", "$student_id"] } } },
              { $lookup: {
                  from: "courses",
                  let: { course_id: "$course_id" },
                  pipeline: [
                    { $match: { $expr: { $eq: ["$$course_id", "$_id"] } } },
                    { $lookup: {
                        from: "instructors",
                        let: { instructor_id: "$instructor_id" },
                        pipeline: [{ $match: { $expr: { $eq: ["$$instructor_id", "$_id"] } } }],
                        as: "instructor"
                    }}
                ],
                  as: "courses"
              }},
               { $unwind: "$courses" },
            ],
            as: "transactional"
          }
    }

    try {
        return await Student.aggregate([match, lookup]);
    } catch (e) {
        return null;
    }
}

module.exports = { getStudentById, getAllDataForStudent, createStudent };