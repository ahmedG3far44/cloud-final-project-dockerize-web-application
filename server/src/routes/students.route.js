const express = require("express");
const router = express.Router();
const myDatabase = require("../db/database");

router.get("/students", async (req, res) => {
  try {
    const getAllStudentsQuery = `select * from cloud_students`;
    myDatabase.query(getAllStudentsQuery, (error, students) => {
      if (error) {
        res.status(404).json(error.message);
      } else {
        if (Array.isArray(students) && students.length === 0) {
          res.status(200).json([]);
        } else {
          res.status(200).json(students);
        }
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/students/:student_id", async (req, res) => {
  try {
    const { student_id } = req.params;
    const getOneStudent = `select * from cloud_students WHERE student_id="${student_id}"`;
    myDatabase.query(getOneStudent, (error, oneStudent) => {
      error
        ? res.status(404).json(error.message)
        : res.status(200).json(oneStudent[0]);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/students", async (req, res) => {
  try {
    const { first_name, middle_name, last_name, age, cgpa, profile_image } =
      req.body;
    const addStudentsQuery = `insert into cloud_students
    (first_name,middle_name,last_name,age , cgpa, profile_image)values
    ('${first_name}','${middle_name}', '${last_name}', '${age}', '${cgpa}', '${profile_image}')`;
    myDatabase.query(addStudentsQuery, (error, student) => {
      error
        ? res.status(404).json(error.message)
        : res.status(201).json(student);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.put("/students", async (req, res) => {
  try {
    const { student_id } = req.query;
    const { first_name, middle_name, last_name, age, cgpa, profile_image } =
      req.body;
    const updateStudent = `UPDATE cloud_students 
    SET first_name='${first_name}', middle_name='${middle_name}', last_name='${last_name}', age='${age}', cgpa='${cgpa}', profile_image='${profile_image}' WHERE student_id='${student_id}'`;
    myDatabase.query(updateStudent, (error, student) => {
      error
        ? res.status(404).json(error.message)
        : res.status(201).json(student);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.delete("/students", async (req, res) => {
  try {
    const { student_id } = req.query;
    const deleteStudent = `DELETE FROM cloud_students WHERE student_id='${student_id}'`;
    myDatabase.query(deleteStudent, (error, student) => {
      error
        ? res.status(404).json(error.message)
        : res.status(201).json(student);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
