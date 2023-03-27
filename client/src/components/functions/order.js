import axios from "axios";

export const listOrder = async (authtoken) => {
  return await axios.get(process.env.REACT_APP_API + "/listOrder", {
    headers: {
      authtoken,
    },
  });
};
export const CreateOrder = async (authtoken, values) => {
  console.log("CreateOrder - order.js: ", values);
  const file = document.querySelector("#photo").files[0];
  const formData = new FormData();
  formData.append("file", file);

  for (const [key, value] of Object.entries(values)) {
    formData.append(key, value);
  }

  //console.log(">>>> Auth: ", authtoken);
  let result = await axios.post(
    process.env.REACT_APP_API + "/createOrder",
    formData,
    {
      headers: {
        authtoken: authtoken,
      },
    }
  );
  return result;
};
