import React, { useState, useEffect } from "react";
//function
import { listProduct } from "../../functions/product";
//Page
import MenubarAdmin from "../../layouts/MenubarAdmin";


export default function Requisition() {
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

  return (
    <div>
        <MenubarAdmin />
      <h1>Requisition</h1>
      <div className="">
            <table className="mt-10 w-full text-l text-left text-gray-900  ">
              <thead className="text-l text-gray-700 uppercase bg-blue-200  ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cost
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sale
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Detail
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Photo
                  </th>
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
                      
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    </div>
  );
}
