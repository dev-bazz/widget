// receiving from the DB dir
// pretty much receiving the state of the database and sending it
const { v4: uuid } = require("uuid");
const Record = require("../database/Workout");
const { connectMongoDB } = require("../libs/mongodb");

const createRecord = async (newRecord) => {
  // const yes = await connectMongoDB();

  const recordToInsert = {
    ...newRecord,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdRecord = Record.createNewRecord(recordToInsert);
    return createdRecord;

  } catch (error) {
    console.log("Errrriygvjhvk", error);
    throw "Errr", error;
    
  }
};

module.exports = {
  createRecord,
};
