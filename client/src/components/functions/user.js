import axios from "axios";

export const listUser = async (authtoken) => {
  return await axios.get(process.env.REACT_APP_API + "/listUser", {
    headers: {
      authtoken,
    },
  });
};

export const changeRole = async (values) => {
  return await axios.post(process.env.REACT_APP_API + "/changeRole", values);
};

export const deleteUser = async (id) => {
  return await axios.delete(process.env.REACT_APP_API + "/deleteUser/" + id);
};
export const userCart = async (authtoken, cart) => {
  // TODO: Delete
  console.log("userCart - user.js:", cart);
  return await axios.post(
    process.env.REACT_APP_API + "/user/cart",
    { cart: cart },
    {
      headers: {
        authtoken,
      },
    }
  );
};
export const CartUpdateToProduct = async (authtoken, cart) => {
  // TODO: FIXME
  console.log("CartUpdateToProduct - user.js:", cart);
  return await axios.put(
    process.env.REACT_APP_API + "/user/CartUpdateToProduct",
    { cart: cart },
    {
      headers: {
        authtoken,
      },
    }
  );
};
export const adminCart = async (authtoken, cartAdmin) => {
  return await axios.post(
    process.env.REACT_APP_API + "/admin/cart",
    { cartAdmin },
    {
      headers: {
        authtoken,
      },
    }
  );
};
export const addToWishList = async (authtoken, productId) => {
  return await axios.post(
    process.env.REACT_APP_API + "/user/wishlist",
    { productId },
    {
      headers: {
        authtoken,
      },
    }
  );
};
