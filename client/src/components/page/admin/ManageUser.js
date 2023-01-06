import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Select } from "antd";

//function
import { listUser,changeRole, deleteUser } from "../../functions/user";

export default function ManageUser() {
  const { user } = useSelector((state) => ({ ...state }));
  const [data, setData] = useState([]);

  //console.log("data", data);
  useEffect(() => {
    loadData(user.token);
  }, []);

  const loadData = (authtoken) => {
    listUser(authtoken)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  
  const roleData = ["admin", "member"];

  const handleChangeRole= (e, id) =>{
    
    let values ={
        id:id,
        role:e
    }
    changeRole(user.token ,values)
    .then((res) => {
        console.log(res);
        loadData(user.token);
    }).catch((err) => {
        console.log(err.response);
    })
  }

  


//   const handleDelete = (id) => {
//     deleteUser(user.token, id)
//       .then((res) => {
//         console.log(res);
//         loadData(user.token);
//       })
//       .catch((err) => {
//         console.log(err.response.data);
//       });
//   };

  return (
    <div>
      <h1>ManageUser</h1>
      <table class="min-w-full border-collapse block md:table">
        <thead class="block md:table-header-group">
          <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Username
            </th>
            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Role
            </th>
            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              CreatedAt
            </th>
            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              UpdateAt
            </th>
            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="block md:table-row-group">
          {data.map((item, index) => (
            <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold"></span>
                {item.username}
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold"></span>

                <Select onChange={(e)=> handleChangeRole(e, item.id)}
                defaultValue={item.role}
                >
                  {roleData.map((item, index) => (
                    <Select.Option 
                    value={item} 
                    key={index}>
                      {item}
                    </Select.Option>
                  ))}
                </Select>
              </td>

              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold"></span>
                {item.createdAt}
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold"></span>
                {item.updatedAt}
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Actions
                </span>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                  Edit
                </button>
                <button
                    // onClick={handleDelete(item.id)}
                  class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
