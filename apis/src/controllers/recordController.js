const recordService2 = require("../services/recordService2");

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
    message: body.message,
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

module.exports = {
  createNewRecord,
};                                                                                                                                                                                                                                                                                                                                                                                                                                  