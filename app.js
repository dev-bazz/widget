const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 5805;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
const client = new MongoClient('mongodb://localhost:5808');
client.connect();

// Routes
app.post('/submit', async (req, res) => {
  try {
    const db = client.db('widgetDatabase');
    const collection = db.collection('widgetCollection');
    await collection.insertOne(req.body);
    res.send('Data inserted successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error inserting data.');
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
