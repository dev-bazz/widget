import { MongoClient } from "mongodb";

export const connectMongoDB = async () => {
  try {
    const client = new MongoClient(
      "mongodb+srv://drdonice:IF7PgoOZnKGMN9UT@cluster0.o5adba2.mongodb.net/next_api_crud"
    );
    console.log("Connected to MongoBD");
    return client;
  } catch (error) {
    console.log(error);
  }
};
