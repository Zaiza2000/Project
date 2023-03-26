import React, { useEffect, useState } from "react";
//function
import { listOrderDetailByUser } from "../../functions/order_detail.js";
import MenubarMember from "../../layouts/MenubarMember";

export default function OrderUser() {
  const [orderUser, setOrderUser] = useState([]);
  const [listorderUser, setListOrderUser] = useState([]);

  useEffect(() => {
    var list_OrderUser = [];

    listOrderDetailByUser(80).then((res) => {
      var temp = res.data;
      setListOrderUser(res.data);

      for (let i = 0; i < temp.length; i++) {
        if (!list_OrderUser.includes(temp[i].OID)) {
          list_OrderUser.push(temp[i].OID);
        //   console.log(list_OrderUser);
        }
      }
      setOrderUser(list_OrderUser);
    });
  }, []);

  const tableHead = (
    <thead className="text-xs text-black uppercase ">
      <tr>
        <th scope="col" className="px-6 py-3">
          OID
        </th>
        <th scope="col" className="px-6 py-3">
          รหัสลูกค้า
        </th>
        <th scope="col" className="px-6 py-3">
          สินค้า
        </th>
        <th scope="col" className="px-6 py-3">
          รายละเอียด
        </th>
        <th scope="col" className="px-6 py-3">
          จำนวน
        </th>
        <th scope="col" className="px-6 py-3">
          ราคาขาย
        </th>

        <th scope="col" className="px-6 py-3">
          ราคาต้นทุน
        </th>
      </tr>
    </thead>
  );

  const tableData_user = (user_id, OID) => {
    return listorderUser.map((inner_item) => {
      if (inner_item.OID === OID) {
        return (
          <tbody>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-black whitespace-nowrap "
              >
                {inner_item.OID}
              </th>
              <td className="px-6 py-4">{inner_item.id}</td>
              <td className="px-6 py-4">{inner_item.product_name}</td>
              <td className="px-6 py-4">{inner_item.product_detail}</td>
              <td className="px-6 py-4">{inner_item.quantity}</td>
              <td className="px-6 py-4">{inner_item.price}</td>
              <td className="px-6 py-4">{inner_item.cost}</td>
            </tr>
          </tbody>
        );
      }
    });
  };

  return (
    <div>
      <MenubarMember />
      <h1>Order User</h1>
      <div>
        {/* {orderUser} */}
        {orderUser.map((OID) => (
          <div>
            <table className="w-full text-sm text-left text-black bg-blue-400 ">
              {tableHead}
              {tableData_user(89, OID)}
            </table>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
}
