const recordService = require("../services/recordService");
const recordService2 = require("../services/recordService2");

const getAllRecords = (req, res) => {
  try {
    const allRecords = recordService.getAllRecords();
    res.send({ status: "OK", data: allRecords });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneRecord = (req, res) => {
  const {
    params: { recordId },
  } = req;
  if (!recordId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':recordId' can not be empty" },
      });
  }
  try {
    const record = recordService.getOneRecord(recordId);
    res.send({ status: "OK", data: record });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewRecord = (req, res) => {
  const { body } = req;

  if (
    !body.name ||
    !body.email ||
    !body.message
  ) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body: 'name', 'email', message'"
        },
      });
    return;
  }
  const newRecord = {
    name: body.name,
    email: body.email,
    messgae: body.messgae,
  };
  try {
    const createdRecord = recordService2.createRecord(newRecord);
    res.status(201).send({ status: "OK", data: createdRecord });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneRecord = (req, res) => {
  const {
    body,
    params: { recordId },
  } = req;
  if (!recordId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':recordId' can not be empty" },
      });
  }
  try {
    const updatedRecord = recordService.updateOneRecord(recordId, body);
    res.send({ status: "OK", data: updatedRecord });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneRecord = (req, res) => {
  const {
    params: { recordId },
  } = req;
  if (!recordId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':recordId' can not be empty" },
      });
  }
  try {
    recordService.deleteOneRecord(recordId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllRecords,
  getOneRecord,
  createNewRecord,
  updateOneRecord,
  deleteOneRecord,
};                                                                                                                                                                                                                                                                                                                                                                                                                                  