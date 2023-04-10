import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//page
import MenubarAdmin from "../../../layouts/MenubarAdmin";

//function
import {
  createCategory,
  listCategory,
  deleteCategory,
} from "../../../../components/functions/category";

const initialstate = {
  category_id: "",
  category_name: "",
  category_detail: "",
};

export default function CreateCategory() {
  const [values, setValues] = useState(initialstate);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    listCategory()
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log("data", category);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory(values)
      .then((res) => {
        alert("Insert Category success");
        loadData();
      })
      .catch((error) => {
        console.log(error.response.data);
        alert(error.response.data);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      deleteCategory(id)
        .then((res) => {
          console.log(res);
          loadData();
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };

  return (
    <div className="flex flex-row">
      {/* <NavbarLogin /> */}
      <MenubarAdmin />
      <div className="">
       
        <div className="p-6">
          <h3 className="text-4xl font-bold text-purple-600">
            เพิ่มประเภทของสินค้า
          </h3>
          <form onSubmit={handleSubmit} className=" mr-[10%] mt-10  ">
            <div className="md:flex md:items-center mb-6 ">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-10"
                  
                >
                  รหัสประเภทของสินค้า
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                required
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="number"
                  name="category_id"
                  value={values.category_id}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-10"
                 
                >
                  ชื่อประเภทของสินค้า
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                required
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
                 
                >
                  รายละเอียดประเภทสินค้า
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                required
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
          <div className=" ">
            <table className="mt-10 w-full text-l text-left text-gray-900 ">
              <thead className="text-l text-gray-700 uppercase bg-blue-200 ">
                <tr>
                  <th scope="col" className="px-10 py-3">
                    Category ID
                  </th>
                  <th scope="col" className="px-10 py-3">
                    {" "}
                    Name
                  </th>
                  <th scope="col" className="px-10 py-3">
                    {" "}
                    Detail
                  </th>
                  <th scope="col" className="px-10 py-3">
                    {" "}
                    CreatedAt
                  </th>
                  <th scope="col" className="px-10 py-3">
                    {" "}
                    UpdateAt
                  </th>
                  <th scope="col" className="px-16 py-3">
                    {" "}
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {category.map((item) => (
                  <tr className="bg-white border-b hover:bg-gray-50 ">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold"></span>
                      {item.category_id}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold"></span>
                      {item.category_name}
                    </td>

                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold"></span>
                      {item.category_detail}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold"></span>
                      {item.createdAt}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold"></span>
                      {item.updatedAt}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold">
                        Actions
                      </span>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                        <Link to={`/admin/update-category/${item.category_id}`}>
                          Edit
                        </Link>
                      </button>
                      <button
                        onClick={() => handleDelete(item.category_id)}
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
