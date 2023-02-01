import axios from "axios";

export const listProvince = async () => {
    return await axios.get(process.env.REACT_APP_API + "/province" 
    );
  };

  export const listAmphure = async (id) => {
    return await axios.get(process.env.REACT_APP_API + "/province/" + id + "/amphure" 
    );
  };

  export const listDistrict = async (id) => {
    return await axios.get(process.env.REACT_APP_API + "/amphure/" + id
    );
  };