import 'dotenv/config';
import express from "express";

const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());

let studentData = [];
let nextId = 1;

app.post("/students", (req, res) => {
  let { name, age } = req.body;
  const student = { id: nextId++, name, age };
  studentData.push(student);
  res.status(201).send(student);
});

app.get("/students", (req, res) => {
  res.send(studentData);
});

app.get("/students/:id", (req, res) => {
  const student = studentData.find(
    (student) => student.id === parseInt(req.params.id)
  );
  if (student) {
    res.send(student);
  } else {
    res.status(404).send("Student not found");
  }
});

app.put("/students/:id", (req, res) => {
  const student = studentData.find(
    (student) => student.id === parseInt(req.params.id)
  );
  if (student) {
    let { name, age } = req.body;
    student.name = name;
    student.age = age;
    res.send(student);
  } else {
    res.status(404).send("Student not found");
  }
});

app.delete("/students/:id", (req, res) => {
  const studentIndex = studentData.findIndex(
    (student) => student.id === parseInt(req.params.id)
  );
  if (studentIndex !== -1) {
    studentData.splice(studentIndex, 1);
    res.send("Student deleted");
  } else {
    res.status(404).send("Student not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port :${port}`);
});
