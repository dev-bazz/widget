const { MongoClient } = require("mongodb")

const connectMongoDB = async() => {
  try {
    // await mongoose.connect(process.env.MONGODB_URI);
    const client = new MongoClient("mongodb+srv://drdonice:IF7PgoOZnKGMN9UT@cluster0.o5adba2.mongodb.net/next_api_crud");
    return client;
    //  return await mongoose.connect("mongodb+srv://drdonice:IF7PgoOZnKGMN9UT@cluster0.o5adba2.mongodb.net/next_api_crud")
    console.log("Connected to MongoBD")
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectMongoDB,
};