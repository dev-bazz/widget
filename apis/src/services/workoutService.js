// receiving from the DB dir
// pretty much receiving the state of the database and sending it
const { v4: uuid } = require("uuid");
const Record = require("../database/Record");
import connectMongoDB from "../libs/mongodb";

const createRecord = (newRecord) => {
  const yes = connectMongoDB();

  const recordToInsert = {
    ...newRecord,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdRecord = Record.createRecord(recordToInsert);
    return createdRecord;

  } catch (error) {
    throw error;
  }
};

module.exports = {
  createRecord,
};
