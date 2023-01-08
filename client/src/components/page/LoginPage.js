import React, { useState } from "react";
import "../../App.css";
//function
import { login } from "../functions/auth.js";
//redux
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../layouts/Navbar";

export default function LoginPage() {

  const dispatch  = useDispatch()
  const navigate = useNavigate()

  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const roleBaseRedirect = (role) =>{
    if (role === "admin"){
      navigate("/admin/index");

    }else {
      navigate("/member/index");
    }
  }

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);

    //code
    login(value)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
        dispatch({
          type:'LOGIN',
          payload: {
            token:res.data.token,
            username:res.data.payload.user.username,
            role:res.data.payload.user.role
          }
        });
        
        localStorage.setItem('token',res.data.token)
        roleBaseRedirect(res.data.payload.user.role)

      })
      .catch((error) => {
        console.log(error.response.data);
        alert(error.response.data);
      });
  };

  console.log(value);
  return (
    <div className="App">
      <Navbar/>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
            เข้าสู่ระบบ
          </h1>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-2">
              <label
                for="text"
                className="block text-sm font-semibold text-gray-800"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {/* <a
                            href="#"
                            className="text-xs text-purple-600 hover:underline"
                        >
                            Forget Password?
                        </a> */}
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            ไม่มีบัญชีผู้ใช้{" "}
            <a href="/sign-up" className="font-medium text-purple-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
