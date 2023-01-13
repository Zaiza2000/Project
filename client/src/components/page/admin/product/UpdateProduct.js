import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
//page
import MenubarAdmin from "../../../layouts/MenubarAdmin";
import NavbarLogin from "../../../layouts/NavbarLogin";
//function
import { editProduct, getProduct } from "../../../functions/product";

const initialstate = {
  product_name: "",
  product_cost: "",
  product_sale: "",
  product_photo: null,
  product_detail: "",
  product_num: "",
  product_promotion: "",
  category_id: "",
};

export default function UpdateProduct() {
  const param = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState(initialstate);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getProduct(param.id)
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
    editProduct(values.product_id, values)
      .then((res) => {
        console.log(res);
        alert("Update Product success");
        navigate("/admin/create-product");
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
        <h3 className="text-4xl font-bold text-purple-600">แก้ไขสินค้า</h3>
        <form onSubmit={handleSubmit} className=" mr-[10%] mt-10  ">
          <div className="md:flex md:items-center mb-6 ">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-10"
                for="inline-full-name"
              >
                ชื่อสินค้า
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                name="product_name"
                value={values.product_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6 ">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-10"
                for="inline-full-name"
              >
                ราคาทุน
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="number"
                name="product_cost"
                value={values.product_cost}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6 ">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-10"
                for="inline-full-name"
              >
                ราคาขาย
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="number"
                name="product_sale"
                value={values.product_sale}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6 ">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-10"
                for="inline-full-name"
              >
                รายละเอียด
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                name="product_detail"
                value={values.product_detail}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6 ">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-10"
                for="inline-full-name"
              >
                จำนวนสินค้า
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="number"
                name="product_num"
                value={values.product_num}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6 ">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-10"
                for="inline-full-name"
              >
                promotion
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                name="product_promotion"
                value={values.product_promotion}
                onChange={handleChange}
              />
            </div>
          </div>
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
