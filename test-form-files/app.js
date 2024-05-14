// app.js

// Require necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const cors = require('cors');

// This will initialize Express app
const app = express();


app.use(bodyParser.json()); // to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // to parse URL-encoded bodies
// app.use(cors({
//     origin: 'http://127.0.0.1:27017'
//   }));
  


// MongoDB connection
// mongoose.connect(process.env.MONGODB_URI)
const connectMongoDB = async() => {
    try {
      await mongoose.connect("mongodb+srv://henryimoh2:B8jkYtvtMQu6Cnxg@cluster0.e4a2bxe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {useNewUrlParser: true}, {useUnifiedTopology: true } );
      console.log("Connected to MongoBD")
    } catch (error) {
      console.log(error);
    }
  };

  connectMongoDB()
const db = mongoose.connection;



// Schema for my data
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

// this Defines a model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);

//to handle form submission
app.post('/submit-form', async (req, res) => {
    // console.log('Request body:', req.body);
    const formData = new FormData({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });

  // Saves the form data to MongoDB
  formData.save()
  .then(savedFormData => {
    console.log('Form data saved successfully:', savedFormData);
    res.status(200).send('Form data saved successfully');
  })
  .catch(error => {
    console.error('Error saving form data:', error);
    res.status(500).send('Error saving form data');
  });
});


// app.get('/test', ()=>{

//     return 'success'
// })

// Starts the server
const PORT = process.env.PORT || 27017;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

//   console.log (process.env.MONGODB_URI)
});

