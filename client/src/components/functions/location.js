import axios from "axios";

export const listProvince = async () => {
  return await axios.get(process.env.REACT_APP_API + "/province");
};

export const listDistrict = async (id) => {
  return await axios.get(
    process.env.REACT_APP_API + "/province/" + id + "/district"
  );
};

export const listSubDistrict = async (id) => {
  return await axios.get(process.env.REACT_APP_API + "/district/" + id);
};
