const Record = require("../database/Record");

const getRecordForRecord = (recordId) => {
  try {
    const record = Record.getRecordForRecord(recordId);
    return record;
  } catch (error) {
    throw error;
  }
};

const getAllRecords = () => {
  try {
    const allWorkouts = Record.getAllWorkouts();
    return allWorkouts;
  } catch (error) {
    throw error;
  }
}
module.exports = { getRecordForRecord, getAllRecords };