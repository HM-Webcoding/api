const express = require("express");
const cors = require("cors");
const app = express();

//Midleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const people = [
  {
    Name: "Sakib",
    Age: 28,
    Dob: "12 march 1995",
  },
  {
    Name: "Tamim",
    Age: 33,
    Dob: "12 march 1990",
  },
  {
    Name: "Marshafi",
    Age: 30,
    Dob: "12 march 1995",
  },
  {
    Name: "Mosfiqe",
    Age: 32,
    Dob: "12 march 1995",
  },
  {
    Name: "Taskin",
    Age: 26,
    Dob: "12 march 1995",
  },
];

app.get("/", (req, res) => {
  res.json(people);
});

app.listen(8000, () => {
  console.log("app runing on 8000 port");
});
