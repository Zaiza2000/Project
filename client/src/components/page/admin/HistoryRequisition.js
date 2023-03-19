import { Item } from "rc-menu";
import React, { useEffect, useState } from "react";

//function
import {
  getRequisition,
  listRequisition,
} from "../../functions/requisition.js";

export default function HistoryRequisition() {
  const [requisition, setRequisition] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    listRequisition().then((res) => {
      setRequisition(res.data);
    });
  };

  return (
    <div>
      <h1>HistoryRequisition</h1>
      {requisition.map((item, index) => (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-black dark:text-black">
            <thead class="text-xs text-black uppercase bg-gray-50 dark:bg-red-700 dark:text-white">
              <tr>
                <th scope="col" class="px-6 py-3">
                  RID
                </th>
                <th scope="col" class="px-6 py-3">
                  สินค้า
                </th>
                <th scope="col" class="px-6 py-3">
                  จำนวน
                </th>
                <th scope="col" class="px-6 py-3">
                  ราคาต้นทุน
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-gray-200 border-b dark:bg-g00 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black"
                >
                  {item.RID}
                </th>
                <td class="px-6 py-4">{item.product_name}</td>
                <td class="px-6 py-4">{item.quantity}</td>
                <td class="px-6 py-4">{item.price}</td>
                <td class="px-6 py-4">
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    พิมพ์ใบเบิก
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
