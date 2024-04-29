// importing MongoDB driver
const { MongoClient } = require('mongodb');

// Connect to MongoDB
const uri = 'mongodb://localhost:27017'; // Update with your MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// inserting Template
get_template().then((e) => {
    const t_form = e.querySelector("#form_template");
    const clone = t_form.content.cloneNode(true);

    // Replace the button click event listener logic with the signup functionality
    clone
      .querySelector("button")
      .addEventListener("click", async function (e) {
        e.preventDefault();

        // Get the CRM CDN link from data attribute
        const crmCdnLink = document.currentScript.dataset.crmConfig;

        // Form data extraction
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const emailAddress = document.getElementById('email').value;
        const number = document.getElementById('number').value;
        const password = document.getElementById('password').value;
  
        // Form validation
        if (!firstName || !lastName || !emailAddress || !number || !password) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill out all fields!',
          });
          return;
        }

        const payload = {
          "countryCode": "NG",
          "emailAddress": emailAddress,
          "firstName": firstName,
          "lastName": lastName,
          "mobileNumber": number,
          "password": password,
          "referralCode": "",
          "referralId": "",
        };
  
        try {
          // Submit data to CRM via CDN link
          const responseCRM = await fetch(crmCdnLink, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          });

          // Check if CRM submission was successful
          if (!responseCRM.ok) {
            throw new Error('CRM submission failed');
          }

          await client.connect(); // Connect to MongoDB
          const database = client.db('your_database_name'); // Replace 'your_database_name' with your database name
          const collection = database.collection('your_collection_name'); // Replace 'your_collection_name' with your collection name
          
          // Insert payload into MongoDB collection
          const result = await collection.insertOne(payload);
          
          if (result.insertedCount === 1) {
            // Handle success
            Swal.fire({
              icon: 'success',
              title: 'Welcome!',
              text: 'Your account has been successfully created.',
              confirmButtonText: 'OK',
            });
            const form = document.getElementById('signup-form');
            form.reset();
          } else {
            // Handle insertion failure
            throw new Error('Failed to insert data into MongoDB');
          }
        } catch (error) {
          console.error('Error signing up:', error);
          Swal.fire({
            icon: 'error',
            title: 'Signup Failed',
            text: 'An error occurred while signing up. Please try again later.',
          });
        } finally {
          await client.close(); // Close MongoDB connection
        }
      });

    const placements = document.querySelectorAll(".placement");
    const holder = [...placements];
    if (holder.length > 0) {
      holder.forEach((e) => {
        e.appendChild(clone);
      });
    } else {
      document.body.appendChild(clone);
    }
});

get_styles();

// Getting Template from another Page
async function get_template() {
  const fetch_temp = await fetch("https://dev-bazz.github.io/widget/temp");
  const template = (await fetch_temp.text()).toString();
  const stringed = template.toString();
  const dom_P = new DOMParser().parseFromString(stringed, "text/html");
  return dom_P;
}

// Getting Styles from another Page
function get_styles() {
  // Create a link element
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "https://dev-bazz.github.io/widget/styles.css";
  // link.href = "/styles.css";

  // Append the link element to the head of the document
  document.head.appendChild(link);
}
