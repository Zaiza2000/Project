import React, { useState, useEffect } from "react";
//page
import MenubarAdmin from "../../../layouts/MenubarAdmin";
import NavbarLogin from "../../../layouts/NavbarLogin";
//function
import {
  createProduct,
  listProduct,
  deleteProduct,
} from "../../../../components/functions/product";

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

export default function CreateProduct() {
  const [values, setValues] = useState(initialstate);
  const [product, setProduct] = useState([]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(values)
      .then((res) => {
        alert("Insert Product success");
        loadData();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  //console.log("USER===>", user);
  return (
    <div>
      <NavbarLogin />
      <MenubarAdmin />
      <div className="">

      <div className="mr-[1%] ml-[14%] mt-[-12%] rounded-xl bg-white p-6 ring ring-indigo-50 sm:p-8">
        <h3 className="text-4xl font-bold text-purple-600">เพิ่มสินค้า</h3>
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

        <div className="table">
        <table className="mt-10 w-full text-l text-left text-gray-900 dark:text-gray-600">
        <thead className="text-l text-gray-700 uppercase bg-blue-200 dark:bg-gray-700 dark:text-gray-600">
              <tr>
              <th scope="col" class="px-6 py-3">
                  Product ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Cost
                </th>
                <th scope="col" class="px-6 py-3">
                  Sale
                </th>
                <th scope="col" class="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                  Detail
                </th>
                <th scope="col" class="px-6 py-3">
                  Promotion
                </th>
                <th scope="col" class="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {product.map((item) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                    {item.product_num}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold"></span>
                    {item.product_detail}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold"></span>
                    {item.product_promotion}
                  </td>

                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                      Actions
                    </span>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                      Edit
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
