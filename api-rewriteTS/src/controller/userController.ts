import { ResponseBody, RequestBody, NewRecord } from "../models/types";
import { createUser } from "../services/userService";

export const createNewUser = (
  req: RequestBody,
  res: ResponseBody
) => {
  const { body } = req;

  if (!body.name || !body.email) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Missing required fields: Name, Email" },
    });

    return;
  }
  const newRecord: NewRecord = {
    name: body.name,
    email: body.email,
    message: body.message,
  };

  try {
    const createdUser = createUser(newRecord);
    res.status(201).send({ status: "OK", message: "User Created Successfully",  data: createdUser });
  } catch (error: any) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
