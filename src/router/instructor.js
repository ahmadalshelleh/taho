const express = require("express");
const router = new express.Router();

const { getAllInstructors } = require("../controller/instructor");
const { get, set } = require("../cache/redis");

router.get("/get-all-instructors", async (req, res) => {
  data = await get("all_instructors");
  if (data) return res.send(data);

  data = await getAllInstructors();
  if (data !== null) await set("all_instructors", data);
  return res.send(data);

});

module.exports = router;
