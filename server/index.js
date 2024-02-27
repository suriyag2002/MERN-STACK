const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB", err));

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) { 
                res.json("Success");
            } else {
                res.json("The Password is Incorrect"); 
            }
        } else {
            res.json("No Record Exists");
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).json("An error occurred");
    });
});

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})
app.listen(3001, () => {
    console.log("server is running")
})

// Secure Password

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/employeeDB", { useNewUrlParser: true, useUnifiedTopology: true });

// // Define a Mongoose schema for Employees
// const employeeSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });
// const EmployeeModel = mongoose.model("Employee", employeeSchema);

// // Registration endpoint
// app.post("/register", (req, res) => {
//     const { name, email, password } = req.body;
//     bcrypt.hash(password, saltRounds, function(err, hash) {
//         if (err) {
//             console.error(err);
//             res.status(500).json("Error hashing password");
//         } else {
//             const newEmployee = new EmployeeModel({
//                 name: name,
//                 email: email,
//                 password: hash,
//             });
//             newEmployee.save()
//             .then(() => res.json("User registered successfully"))
//             .catch(err => res.status(500).json(err));
//         }
//     });
// });

// // Login endpoint
// app.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     EmployeeModel.findOne({ email: email })
//     .then(user => {
//         if (user) {
//             bcrypt.compare(password, user.password, function(err, result) {
//                 if (result) {
//                     res.json("Success");
//                 } else {
//                     res.json("The Password is Incorrect");
//                 }
//             });
//         } else {
//             res.json("No Record Exists");
//         }
//     })
//     .catch(err => {
//         console.error(err);
//         res.status(500).json("An error occurred");
//     });
// });

// // Start the server
// app.listen(3001, () => {
//     console.log("Server is running on port 3001");
// });
