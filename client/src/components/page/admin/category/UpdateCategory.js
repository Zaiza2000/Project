import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
//page
import MenubarAdmin from "../../../layouts/MenubarAdmin";
import NavbarLogin from "../../../layouts/NavbarLogin";
//function
import {
  editCategory,
  getCategory,
} from "../../../../components/functions/category";

const initialstate = {
  category_id: "",
  category_name: "",
  category_detail: "",
};

export default function UpdateCategory() {
  const param = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState(initialstate);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getCategory(param.id)
      .then((res) => {
        setValues({ ...values, ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(values);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editCategory(values.category_id, values)
      .then((res) => {
        console.log(res);
        alert("Update Category success");
        navigate("/admin/create-category");
      })
      .catch((err) => {
        alert("Update Error!!!");
        console.log(err);
      });
  };

  return (
    <div>
      <NavbarLogin />
      <MenubarAdmin />
      <div className="mr-[1%] ml-[14%] mt-[-12%] rounded-xl bg-white p-6 ring ring-indigo-50 sm:p-8 ">
        <h3 className="text-4xl font-bold text-purple-600">
          แก้ไขประเภทสินค้า
        </h3>
        <form onSubmit={handleSubmit} className=" mr-[10%] mt-10  ">
          <div className="md:flex md:items-center mb-6 ">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-10"
                for="inline-full-name"
              >
                รหัสประเภทของสินค้า
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="number"
                name="category_id"
                value={values.category_id}
                onChange={handleChange}
                disabled //don't change category_id
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-10"
                for="inline-full-name"
              >
                ชื่อประเภทของสินค้า
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                name="category_name"
                value={values.category_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-10"
                for="inline-full-name"
              >
                รายละเอียดประเภทสินค้า
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                name="category_detail"
                value={values.category_detail}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="ml-[79%] shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-20 rounded"
                type="submit"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
