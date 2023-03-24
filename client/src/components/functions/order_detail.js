import axios from "axios";

export const listOrderDetail = async (authtoken) => {
    return await axios.get(process.env.REACT_APP_API + "/listOrderDetail", {
      headers: {
        authtoken,
      },
    });
  };
export const listOrderDetailByOID = async (authtoken) => {
    return await axios.get(process.env.REACT_APP_API + "/listOrderDetailByOID", {
      headers: {
        authtoken,
      },
    });
  };

export const getOrderDetail = async (id) => {
  return await axios.get(process.env.REACT_APP_API + "/getOrderDetail/" + id);
};