import axios from "axios";

// export const signUp = async (value) =>
//   await axios.post(process.env.REACT_APP_API + "/createUser", value);

  export const signUp = async (value) => {
    console.log(value);
    let result = await axios.post(
      process.env.REACT_APP_API + "/createUser",
      value
    );
    return result;
  };

export const login = async (value) =>
  await axios.post(process.env.REACT_APP_API + "/login", value);

export const currentUser = async (authtoken) => {
  //console.log(authtoken);
  return await axios.post(
    process.env.REACT_APP_API + "/current-user",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currentAdmin = async (authtoken) => {
  console.log(authtoken);
  return await axios.post(
    process.env.REACT_APP_API + "/current-admin",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};
