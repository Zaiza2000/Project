import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Card

//page
import MenubarAdmin from "../../../layouts/MenubarAdmin";

//function
import {
  createProduct,
  listProduct,
  deleteProduct,
} from "../../../../components/functions/product";

import { searchFilters } from "../../../functions/product";

const initialstate = {
  product_name: "",
  product_cost: "",
  product_sale: "",
  product_photo: null,
  product_detail: "",
  product_quantity: "",
  category_id: "",
};

export default function CreateProduct() {
  const [values, setValues] = useState(initialstate);
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [categorySelect, setCategorySelect] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    listProduct()
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchDataFilter = (arg) => {
    searchFilters(arg).then((res) => {
      setProduct(res.data)
    });
  };
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      deleteProduct(id)
        .then((res) => {
          console.log(res);
          loadData();
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };
  const handleCheck = (e) => {
    // ค่าปัจจุบันที่ Check 
    let inCheck = e.target.value
    // ค่าเดิมของ Check 
    let inState = [...categorySelect]

    let findCheck = inState.indexOf(inCheck)
    if (findCheck === -1) {
      inState.push(inCheck)
    } else {
      inState.splice(findCheck, 1)
    }
    setCategorySelect(inState)
    fetchDataFilter({ category: inState })
    if (inState.length < 1) {
      loadData()
    }
  }
  const handleSubmit = (e) => {
    // e.preventDefault();
    createProduct(values)
      .then((res) => {
        alert("Insert Product success");
        loadData();
      })
      .catch((error) => {
        console.log(error.response.data);
        alert(error.response.data);
      });
  };

  return (
    <div className="flex flex-row">
      {/* <NavbarLogin /> */}
      <MenubarAdmin />
      <div className="">
        <div className=" p-6 ">
          <h3 className="text-4xl font-bold text-purple-600">เพิ่มสินค้า</h3>
          <form onSubmit={handleSubmit} className=" mr-[10%] mt-10  ">
            <div className="md:flex md:items-center mb-6 ">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-10">
                  ชื่อสินค้า
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  required
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
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-10">
                  ราคาทุน
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  required
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="number"
                  min="1"
                  name="product_cost"
                  value={values.product_cost}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6 ">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-10">
                  ราคาขาย
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  required
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="number"
                  min="1"
                  name="product_sale"
                  value={values.product_sale}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6 ">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-10">
                  รายละเอียด
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  required
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
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-10">
                  จำนวนสินค้า
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  required
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="number"
                  min="1"
                  name="product_quantity"
                  value={values.product_quantity}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6 ">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-10">
                  Photo (URL)
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  required
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  name="product_photo"
                  value={values.product_photo}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6 ">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-10">
                  รหัสประเภทของสินค้า
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  required
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="number"
                  min="1"
                  name="category_id"
                  value={values.category_id}
                  onChange={handleChange}
                />
              </div>

              {/* <button data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">รหัสประเภทของสินค้า</button>
              <div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownHoverButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                  </li>
                </ul>
              </div> */}


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

          <div className="">
            <table className="mt-10 w-full text-l text-left text-gray-900">
              <thead className="text-l text-gray-700 uppercase bg-blue-200">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    รหัสสินค้า
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ชื่อสินค้า
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ราคาต้นทุน
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ราคาขาย
                  </th>
                  <th scope="col" className="px-6 py-3">
                    จำนวนสินค้า
                  </th>
                  <th scope="col" className="px-6 py-3">
                    รายระเอียด
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                  <th scope="col" className="px-14 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {product.map((item) => (
                  <tr className="bg-white border-b  hover:bg-gray-50 ">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold"></span>
                      {item.product_id}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold"></span>
                      {item.product_name}
                    </td>

                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold"></span>
                      {item.product_cost}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold"></span>
                      {item.product_sale}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold"></span>
                      {item.product_quantity}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold"></span>
                      {item.product_detail}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold"></span>
                      <img
                        className="rounded-t-lg h-32 w-32"
                        src={item.product_photo}
                        alt=""
                      />
                    </td>

                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Actions
                      </span>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                        <Link to={`/admin/update-product/${item.product_id}`}>
                          Edit
                        </Link>
                      </button>
                      <button
                        onClick={() => handleDelete(item.product_id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded ml-5"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
