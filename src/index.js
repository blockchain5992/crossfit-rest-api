const express = require("express");
const bodyParser = require("body-parser");

const v1Router = require("./v1/routes/workoutRoutes");

const app = express();
app.use("/api/v1/workouts",v1Router);
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Server starting at ${port}`);
})

