const express = require("express");
const recordController = require("../../controllers/recordController");

const router = express.Router();

router.post("/create", recordController.createNewRecord);

module.exports = router;