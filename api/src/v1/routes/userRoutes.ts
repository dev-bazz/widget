import express from "express";
import { createNewUser } from "../../controller/userController";

const router = express.Router();

router.post("/", (req, res) => {
    res.send("User Created");
})