import axios from "axios";

export const getProduct = async (id) => {
  return await axios.get(process.env.REACT_APP_API + "/getProduct/" + id);
};

export const listProduct = async (authtoken) => {
  return await axios.get(process.env.REACT_APP_API + "/listProduct", {
    headers: {
      authtoken,
    },
  });
};
export const readProduct = async (id) =>{
  return await axios.get(process.env.REACT_APP_API + "/readProduct/" + id);

};
export const createProduct = async (value) => {
  console.log(value);
  let result = await axios.post(
    process.env.REACT_APP_API + "/createProduct",
    value
  );
  return result;
};

export const editProduct = async (id, value, product) => {
  return await axios.put(
    process.env.REACT_APP_API + "/editProduct/" + id,
    value,
    product
  );
};

export const deleteProduct = async (id) => {
  return await axios.delete(process.env.REACT_APP_API + "/deleteProduct/" + id);
};

export const searchFilters = async (arg) => {
  return await axios.post(process.env.REACT_APP_API + "/search/filters", arg);
};
