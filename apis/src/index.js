const express = require("express");
const bodyParser = require("body-parser");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes")

const app = express();
const PORT = process.env.PORT || 3000;

// Helps to recieve JSON data inside controllers uder req.body
app.use(bodyParser.json());
// when routed to the URL, disply the content
app.use("/api/v1/workouts", v1WorkoutRouter)

app.listen(PORT, () => {
    console.log(`API is listening on ${PORT}`);
});