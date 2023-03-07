import axios from "axios";

export const listOrder = async (authtoken) => {
    return await axios.get(process.env.REACT_APP_API + "/listOrder", {
      headers: {
        authtoken,
      },
    });
  };
  export const CreateOrder = async (value) => {
    console.log(value);
    let result = await axios.post(
      process.env.REACT_APP_API + "/createOrder",
      value
    );
    return result;
  };