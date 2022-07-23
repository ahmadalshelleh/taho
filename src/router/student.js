const express = require("express");
const router = new express.Router();

const {
  createStudent,
  getStudentById,
  getAllDataForStudent,
} = require("../controller/student");
const { get, set } = require("../cache/redis");

router.post("/create-user", async (req, res) => {
    const student = await createStudent(req.body)
});

router.get("/get-student/:id", async (req, res) => {
  const { id } = req.params;

  data = await get("student_" + id);
  if (data) return res.send(data);

  data = await getStudentById(id);
  if (data !== null) await set("student_" + id, data);

  return res.send(data);
});

router.get("/get-all-data-student/:id", async (req, res) => {
  const { id } = req.params;

  data = await get("student_all_data_" + id);
  if (data) return res.send(data);

  data = await getAllDataForStudent(id);
  if (data !== null) await set("student_all_data_" + id, data);

  return res.send(data);
});

module.exports = router;
