import { Axios } from "@/app/config/axios";

// crate account

export const createAccount = async (email) => {
  // (email)
  try {
    const response = await Axios.post("/user", { email }, {});
    return response;
  } catch (error) {
    return error;
  }
};

/// ->> get user

export const getUser = async () => {
  try {
    const response = await Axios.get("/user");
    return response;
  } catch (error) {
    return error;
  }
};

/// ->>> edit user

export const edituser = async (name) => {
  try {
    const response = await Axios.patch("/user", {name}, {
    });
    return response;
  } catch (error) {
    return error;
  }
};
