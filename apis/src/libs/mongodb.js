import mongoose from "mongoose";

console.log("Hello")
const connectMongoDB = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoBD")
  } catch (error) {
    console.log(error);
  }
};


export default connectMongoDB;