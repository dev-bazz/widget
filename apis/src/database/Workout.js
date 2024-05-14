// const DB = require("./db.json");
// const { saveToDatabase } = require("./utils");

const Topic = require("../models/index");

const createNewRecord = async (request) => {
  try {
    // const { name, email, message } = await request;
    console.log("FORM DATA: ", name, email, message);
    const { name, email,message } = await request.json();
    // await connectMongoDB();
    // const topic = await Topic.findOne({ name });
    // if (topic?.name === name) {
    //   return NextResponse.json(
    //     { message: "Name already exists" },
    //     { status: 409 }
    //   );
    // } else {
    //   await Topic.create({ name, email, message });
    //   return NextResponse.json({ message: "Record created" }, { status: 201 });
    // }
  } catch (error) {
    console.log("THIS IS THE ERROR: ", error);
    throw { status: error?.status || 500, message: error?.message || error };
  }
  // try {
  //   const isAlreadyAdded =
  //     DB.records.findIndex((record) => record.name === newRecord.name) > -1;
  //   if (isAlreadyAdded) {
  //     throw {
  //       status: 400,
  //       message: `Record with the name '${newRecord.name}' already exists`,
  //     };
  //   }
  //   DB.records.push(newRecord);
  //   saveToDatabase(DB);
  //   return newRecord;
  // } catch (error) {
  //   throw { status: error?.status || 500, message: error?.message || error };
  // }
};

module.exports = {
  createNewRecord,
};
