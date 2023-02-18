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
export const userCart = async (authtoken, cart) => {
  return await axios.post(
    process.env.REACT_APP_API + "/user/cart",
    { cart },
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