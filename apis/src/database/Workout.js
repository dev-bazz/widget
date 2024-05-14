const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const createNewRecord = (newRecord) => {
  try {
    const isAlreadyAdded =
      DB.records.findIndex((record) => record.name === newRecord.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Record with the name '${newRecord.name}' already exists`,
      };
    }
    DB.records.push(newRecord);
    saveToDatabase(DB);
    return newRecord;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  createNewRecord,
};