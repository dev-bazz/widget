import { connectMongoDB } from "../libs/mongodb";

export const createNewUser = async (req: any, res?: any) => {
    try {
        const client: any = await connectMongoDB();
        const db = client.db("users");
        const ping = await db.command({ping: 1})
        
        const users = await db.collection("users").insertOne({
          ...req
         
        });

        console.log(res, users)
    } catch (error) {
        console.log("Error:", error);
    } finally {
        const client: any = await connectMongoDB();
        await client.close();
      }
}