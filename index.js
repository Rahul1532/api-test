import 'dotenv/config';
import express from "express";
// const cors = require('cors');
import cors from 'cors';

// const express = require('express');  

const app = express();

app.use(cors());


const port = process.env.PORT || 3000;
app.use(express.json());

// Permissions data
const permissions = {
  PANEL_CREATE: true,
  PANEL_UPDATE: true,
  PANEL_READ: true,
  PANEL_DELETE: false,
  PANELIST_CREATE: true,
  PANELIST_UPDATE: true,
  PANELIST_READ: true,
  PANELIST_DELETE: true,
  USER_CREATE: true,
  USER_UPDATE: true,
  USER_READ: true,
  USER_DELETE: true,
  SURVEY_CREATE: false,
  SURVEY_UPDATE: true,
  SURVEY_READ: true,
  SURVEY_DELETE: true,
  MASTER_QUALIFICATION_CREATE: true,
  MASTER_QUALIFICATION_UPDATE: true,
  MASTER_QUALIFICATION_READ: true,
  MASTER_QUALIFICATION_DELETE: true,
  ROLE_PERMISSION_UPDATE: true,
  ROLE_PERMISSION_READ: true,
  PROJECT_CREATE: false,
  PROJECT_UPDATE: true,
  PROJECT_READ: true,
  PROJECT_DELETE: true,
  CLIENT_CREATE: false,
  CLIENT_UPDATE: true,
  CLIENT_READ: true,
  CLIENT_DELETE: true,
};

// Define GET API route
app.get('/permissions', (_, res) => {
  res.status(200).json({
    success: true,
    message: 'Permissions fetched successfully',
    data: permissions,
  });
});


// let studentData = [];
// let nextId = 1;

// app.post("/students", (req, res) => {
//   let { name, age } = req.body;
//   const student = { id: nextId++, name, age };
//   studentData.push(student);
//   res.status(201).send(student);
// });

// app.get("/students", (req, res) => {
//   res.send(studentData);
// });

// app.get("/students/:id", (req, res) => {
//   const student = studentData.find(
//     (student) => student.id === parseInt(req.params.id)
//   );
//   if (student) {
//     res.send(student);
//   } else {
//     res.status(404).send("Student not found");
//   }
// });

// app.put("/students/:id", (req, res) => {
//   const student = studentData.find(
//     (student) => student.id === parseInt(req.params.id)
//   );
//   if (student) {
//     let { name, age } = req.body;
//     student.name = name;
//     student.age = age;
//     res.send(student);
//   } else {
//     res.status(404).send("Student not found");
//   }
// });

// app.delete("/students/:id", (req, res) => {
//   const studentIndex = studentData.findIndex(
//     (student) => student.id === parseInt(req.params.id)
//   );
//   if (studentIndex !== -1) {
//     studentData.splice(studentIndex, 1);
//     res.send("Student deleted");
//   } else {
//     res.status(404).send("Student not found");
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port :${port}`);
});
