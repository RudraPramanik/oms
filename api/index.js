const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log("error connecting to mongodb", error);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const Employee = require("./models/employee");
const Attendance = require("./models/attendance");
// endpoint to register a employee

app.post("addEmployee", async (req, res) => {
  try {
    const {
      employeeName,
      employeeId,
      designation,
      dateOfBirth,
      joiningDate,
      activeEmployee,
      salary,
      address,
    } = req.body;
    //create a new employee
    const newEmployee = new Employee({
      employeeId,
      employeeName,
      designation,
      dateOfBirth,
      joiningDate,
      activeEmployee,
      salary,
      address,
    });

    await newEmployee.save();
    res
      .status(201)
      .json({ message: "employee saved successfuly", employee: newEmployee });
  } catch (error) {
    console.log("error creating employee", error);
    res.status(400).json({ error: error.message });
  }
});

//endpoint to fetch all the employee

app.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    console.log("error fetching employees", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
