const express = require("express");
const cors = require("cors");
const app = express();

//Midleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const circketPlayerBD = [
  {
    Name: "Tamim Iqbal Khan",
    Age: 34,
    Dob: "March 20, 1989",
    PlayingRole: "Opening Batter",
    id: 1,
  },
  {
    Name: "Mohammad Ashraful",
    Age: 39,
    Dob: "July 07, 1984",
    PlayingRole: "Middle order Batter",
    id: 2,
  },
  {
    Name: "Shakib Al Hasan",
    Age: 36,
    Dob: "March 24, 1987",
    PlayingRole: "Allrounder",
    id: 3,
  },
  {
    Name: "Taskin Ahmed",
    Age: 20,
    Dob: "April 03, 1995",
    PlayingRole: "Bowler",
    id: 4,
  },
  {
    Name: "Litton Kumer Das",
    Age: 28,
    Dob: "October 13, 1994",
    PlayingRole: "Wicketkeeper Batter",
    id: 5,
  },
];

app.get("/", (req, res) => {
  res.json(circketPlayerBD);
});

app.listen(8000, () => {
  console.log("app runing on 8000 port");
});
