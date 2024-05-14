const Record = require("../database/Record");

const getRecordForRecord = (recordId) => {
  try {
    const record = Record.getRecordForRecord(recordId);
    return record;
  } catch (error) {
    throw error;
  }
};
module.exports = { getRecordForRecord };