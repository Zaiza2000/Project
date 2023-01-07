import axios from "axios";

export const listUser = async (authtoken) => {
  return await axios.get(process.env.REACT_APP_API + "/listUser", {
    headers: {
      authtoken,
    },
  });
};

export const changeRole = async (authtoken , values) => {
    return await axios.post(process.env.REACT_APP_API + "/changeRole", values ,{
      headers: {
        authtoken,
      },
    });
  };

export const deleteUser = async (authtoken, id) => {
  return await axios.delete(process.env.REACT_APP_API + "/deleteUser/" + id, {
    headers: {
      authtoken,
    },
  });
};
