import axios from "axios";

export const listUser = async (authtoken) => {
  return await axios.get(process.env.REACT_APP_API + "/listUser", {
    headers: {
      authtoken,
    },
  });
};

export const changeRole = async (values) => {
    return await axios.post(process.env.REACT_APP_API + "/changeRole", values 
      );
  };

export const deleteUser = async ( id) => {
  return await axios.delete(process.env.REACT_APP_API + "/deleteUser/" + id
    );
};
