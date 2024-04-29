const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
const studentsRoute = require("./routes/students.route");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/", studentsRoute);

const { SERVER_PORT } = process.env;

app.get("/", (req, res) => {
  res.send(
    `<h1>Dockerize A WEB APPLIcATION || \n CLOUD COMPUTING PROJECT</h1>`
  );
});

app.listen(SERVER_PORT, () => {
  console.log(
    "your application is running successfully on port " + SERVER_PORT
  );
});
