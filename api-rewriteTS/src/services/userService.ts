import { v4 as uuid } from "uuid";
import { createNewUser } from "../db/User";

export const createUser = async (newUser: any) => {
    const userToInsert = {
        ...newUser,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    try {
        const createdUser = createNewUser(userToInsert);
        return createdUser;
    } catch (error) {
        throw error;
    }
}