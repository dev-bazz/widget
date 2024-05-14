const express = require("express");
const bodyParser = require("body-parser");
const v1RecordRouter = require("./v1/routes/recordRoutes")

const app = express();
const PORT = process.env.PORT || 3000;

// Helps to recieve JSON data inside controllers uder req.body
app.use(bodyParser.json());
// when routed to the URL, disply the content
app.use("/api/v1/records", v1RecordRouter)

app.listen(PORT, () => {
    console.log(`API is listening on ${PORT}`);
});