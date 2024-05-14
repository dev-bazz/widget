// const DB = require("./db.json");
// const { saveToDatabase } = require("./utils");
const { connectMongoDB } = require("../libs/mongodb");
const Topic = require("../models/index");

const createNewRecord = async (request, response) => {
  try {
    const client = await connectMongoDB();
    const db = client.db("users");
    const ping = await db.command({ping: 1})
    
    const users = await db.collection("users").insertOne({
      ...request
     
    });

    // console.log(users)

    console.log(response);

    // return response.status(200).json({ message: "Record added successfully" });
  } catch (error) {
    console.log("Error:", error);
  } finally {
    const client = await connectMongoDB();
    await client.close();
  }
};

module.exports = {
  createNewRecord,
};
