import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory(values)
      .then((res) => {
        alert("Insert Category success");
        loadData();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div>
      <h1>CreateCategory</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>รหัสประเภทของสินค้า</label>
          <input
            className="form-control"
            type="number"
            name="category_id"
            value={values.category_id}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>ชื่อประเภทของสินค้า</label>
          <input
            className="form-control"
            type="text"
            name="category_name"
            value={values.category_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>รายละเอียดประเภทสินค้า</label>
          <input
            className="form-control"
            type="text"
            name="category_detail"
            value={values.category_detail}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
      <div className="table">
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Category ID
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Name
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Detail
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                CreatedAt
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                UpdateAt
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {category.map((item) => (
              <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
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
                    <Link to={`/admin/update-category/${item.category_id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={() => handleDelete(item.category_id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
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
  );
}
