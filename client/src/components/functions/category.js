import axios from "axios";

export const getCategory = async (id) => {
  return await axios.get(process.env.REACT_APP_API + "/getCategory/" + id 
  );
};

export const listCategory = async (authtoken) => {
    return await axios.get(process.env.REACT_APP_API + "/listCategory", {
      headers: {
        authtoken,
      },
    });
  };

export const createCategory = async (value) => {
    console.log(value);
    let result = await axios.post(
      process.env.REACT_APP_API + "/createCategory",
      value
    );
    return result;
  };

  export const editCategory = async (id,value,category) => {
    return await axios.put(process.env.REACT_APP_API + "/editCategory/" + id, value,category 
    );
  };

export const deleteCategory = async (id) => {
    return await axios.delete(process.env.REACT_APP_API + "/deleteCategory/" + id, 
    );
  };