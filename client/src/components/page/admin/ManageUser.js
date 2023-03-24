import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { Select } from "antd";

//function
import { listUser, changeRole, deleteUser } from "../../functions/user";
import MenubarAdmin from "../../layouts/MenubarAdmin";

export default function ManageUser() {
  // const { user } = useSelector((state) => ({ ...state }));
  const [data, setData] = useState([]);

  //console.log("data", data);
  useEffect(() => {
    loadData();

  }, []);

  const loadData = () => {
    listUser()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const roleData = ["admin", "member"];

  const handleChangeRole = (e, id) => {
    let values = {
      id: id,
      role: e
    }
    //console.log("values" ,values)
    changeRole(values)
      .then((res) => {
        console.log("res.data =>", res.data);
        loadData();
      }).catch((err) => {
        console.log(err.response);
      })
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      deleteUser(id)
        .then((res) => {
          console.log(res);
          loadData();
        })
        .catch((err) => {
          console.log(err.response.data);
        })
    }

  };

  return (
    <div className="flex flex-row">
      {/* <NavbarLogin/> */}
      <MenubarAdmin />
      <div className="p-6 pr-16">
        <h3 className="text-4xl font-bold text-purple-600">
          จัดการผู้ใช้งาน
        </h3>
        <table className="mt-10 w-full text-l text-left text-gray-900 ">
          <thead className="text-l text-gray-700 uppercase bg-blue-200  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                CreatedAt
              </th>
              <th scope="col" className="px-6 py-3">
                UpdateAt
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {data.map((item, index) => (
              <tr className="bg-white border-b  hover:bg-gray-50 ">
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {item.id}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {item.username}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {item.firstname}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {item.lastname}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>

                  <Select value={item.role} onChange={(e) => handleChangeRole(e, item.id)}

                  >
                    {roleData.map((item, index) => (
                      <Select.Option
                        value={item}
                        key={index}>
                        {item.role}
                      </Select.Option>
                    ))}
                  </Select>
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
                  {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                  Edit
                </button> */}
                  <button
                    onClick={() => handleDelete(item.id)}
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

  );
}
