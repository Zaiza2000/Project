import axios from 'axios';

export const login = async(value) =>
    await axios.post(process.env.REACT_APP_API + "/login" , value);

export const currentUser = async(authtoken) => {
    console.log(authtoken);
    return await axios.post(process.env.REACT_APP_API + "/current-user" , {},
    {
        headers: {
             authtoken,
        }
    });

}
