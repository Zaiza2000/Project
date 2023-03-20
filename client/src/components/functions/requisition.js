import axios from "axios";

export const listRequisition = async (authtoken) => {
    return await axios.get(process.env.REACT_APP_API + "/listRequisition", {
      headers: {
        authtoken,
      },
    });
  };
export const listRequisitionByRID = async (authtoken) => {
    return await axios.get(process.env.REACT_APP_API + "/listRequisitionByRID", {
      headers: {
        authtoken,
      },
    });
  };

export const getRequisition = async (id) => {
  return await axios.get(process.env.REACT_APP_API + "/getRequisition/" + id);
};
