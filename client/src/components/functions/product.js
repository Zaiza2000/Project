import axios from "axios";

export const listProduct = async (authtoken) => {
  return await axios.get(process.env.REACT_APP_API + "/listProduct", {
    headers: {
      authtoken,
    },
  });
};


export const createProduct = async (value) =>
  await axios.post(process.env.REACT_APP_API + "/createProduct", value);
