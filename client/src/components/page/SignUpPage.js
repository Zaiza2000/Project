import "../../App.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//function
import { sighUp } from "../functions/auth";
import {
  listProvince,
  listDistrict,
  listSubDistrict,
} from "../functions/location";

// import axios from "axios";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [sub_district, setSubDistrict] = useState([]);
  const [zipcode, setZipcode] = useState([]);

  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    birthdate: "",
    email: "",
    tel: "",
    username: "",
    password: "",
    confirmPassword: "",
    address: "",
    sub_district: "",
    district: "",
    province: "",
    zipcode: "",
    role: "",
  });

  useEffect(() => {
    //code
    loadData();
  }, []);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  //Locations
  const loadData = () => {
    listProvince()
      .then((res) => {
        setProvince(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const onChangeProvince = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let lable = e.nativeEvent.target[index].text;
    setValue({
      ...value,
      [e.target.name]: lable,
    });

    listDistrict(e.target.value)
      .then((res) => {
        setDistrict(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const onChangeDistrict = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let lable = e.nativeEvent.target[index].text;
    setValue({
      ...value,
      [e.target.name]: lable,
    });

    listSubDistrict(e.target.value)
      .then((res) => {
        setSubDistrict(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const onChangeSubDistrict = (e) => {
    const filterDistrict = sub_district.filter((item) => {
      return e.target.value === item.id;
    });
    // // let index = e.nativeEvent.target.selectedIndex;
    // // let lable = e.nativeEvent.target[index].text;
    setValue({
      ...value,
      [e.target.name]: filterDistrict[0].name_th,
      zipcode: filterDistrict[0].zip_code,
    });
  };

  /////////////////////////////////////////////////

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(value);
    if (value.password !== value.confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน");
    } else if (!value.email) {
      alert("กรุณากรอกข้อมูลอีเมล");
    } else if (!value.firstname) {
      alert("กรุณากรอกข้อมูลชื่อ");
    } else if (!value.lastname) {
      alert("กรุณากรอกข้อมูลนามสกุล");
    } else if (!value.tel) {
      alert("กรุณากรอกข้อมูลเบอร์โทร");
    } else if (!value.birthdate) {
      alert("กรุณากรอกข้อมูลวันเกิด");
    } else if (!value.username) {
      alert("กรุณากรอกข้อมูลชื่อบัญชีผู้ใช้งาน");
    } else if (!value.password) {
      alert("กรุณากรอกข้อมูลรหัสผ่าน");
    } else if (!value.address) {
      alert("กรุณากรอกข้อมูลที่อยู่");
    } else if (!value.province) {
      alert("กรุณากรอกข้อมูลจังหวัด");
    } else if (!value.sub_district) {
      alert("กรุณากรอกข้อมูลตำบล");
    } else if (!value.district) {
      alert("กรุณากรอกข้อมูลอำเภอ");
    } else if (!value.zipcode) {
      alert("กรุณากรอกข้อมูลรหัสไปรษณีย์");
    } else {
      sighUp(value)
        .then((res) => {
          console.log(res.data);
          alert("ลงทะเบียนสำเร็จ");
          navigate("/login");
        })

        .catch((error) => {
          console.log(error.response.data);
          alert(error.response.data);
        });
    }
  };


  return (
    <div className="App">
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-red-700 uppercase">
            ลงทะเบียน
          </h1>
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  ชื่อ
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  name="firstname"
                  placeholder="สมหญิง"
                  onChange={(e) => handleChange(e)}
                />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  นามสกุล
                </label>

                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  name="lastname"
                  placeholder="วาเลนติโน"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  วันเกิด
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-birthdate"
                  name="birthdate"
                  type="date"
                  // max={}
                  onChange={(e) => handleChange(e)}
                />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  เบอร์โทร
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-tel"
                  name="tel"
                  type="text"
                  placeholder="098-765xxxx"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-email"
                >
                  อีเมล
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-email"
                >
                  ชื่อบัญชีผู้ใช้งาน
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="username"
                  type="text"
                  name="username"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  รหัสผ่าน
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
                {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  ยืนยันรหัสผ่าน
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-confirmpassword"
                  type="password"
                  name="confirmPassword"
                  onChange={(e) => handleChange(e)}
                />
                {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  ที่อยู่
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="address-text"
                  type="text"
                  name="address"
                  placeholder="88/8 หมู่ 8 "
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for=""
                >
                  จังหวัด
                </label>
                <select
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="province"
                  onChange={(e) => onChangeProvince(e)}
                >
                  {province.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name_th}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-64 md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for=""
                  >
                    อำเภอ
                  </label>
                  <select
                    className="appearance-none block w-64 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="district"
                    onChange={(e) => onChangeDistrict(e)}
                  >
                    {district.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name_th}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for=""
                >
                  ตำบล
                </label>
                <select
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="sub_district"
                  onChange={(e) => onChangeSubDistrict(e)}
                >
                  {sub_district.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name_th}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-64 md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for=""
                  >
                    รหัสไปรษณีย์
                  </label>
                  <input
                    className="appearance-none block w-64 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    name="zipcode"
                    value={value.zipcode}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>

            {/* <a
                            href="#"
                            className="text-xs text-purple-600 hover:underline"
                        >
                            Forget Password?
                        </a> */}
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-purple-600">
                <Link to="/login">สมัครสมาชิก</Link>
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            มีบัญชีผู้ใช้แล้ว{" "}
            <a
              href="/login"
              className="font-medium text-red-600 hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
