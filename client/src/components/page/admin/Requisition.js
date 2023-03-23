import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//Card
import AdminProductCard from "../../card/AdminProductCard";
//function
import { listProduct } from "../../functions/product";
//layout
import MenubarAdmin from "../../layouts/MenubarAdmin";

export default function Requisition() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState([]);
  const { cartAdmin, user } = useSelector((state) => ({ ...state }));

  console.log("cartAdmin", cartAdmin);
  console.log("Admin", user);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    listProduct()
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-row">
      <MenubarAdmin />

      <div className="pt-6">
        {loading ? (
          <h1 className="text-4xl font-bold text-purple-600 ">Loading.....</h1>
        ) : (
          <h1>.</h1>
        )}

        {/* Show Product Cart */}
        {/* <div className="">
          {cartAdmin.map((item, index) => (
            <div key={index} className="">
              {item.product_name} x {item.count}
              <hr />
            </div>
          ))}
        </div> */}

        {/* Data Product */}
        <div>
          <h3 className="text-4xl font-bold text-purple-600">เบิกสินค้า</h3>
          {product.length < 1 && <p>No Product </p>}

          <table className="mt-10 w-full text-l text-left text-gray-900 ">
            <thead className="text-l text-gray-700 uppercase bg-blue-200  ">
              <tr>
                <th scope="col" className="px-6 py-3 ">
                  รูปภาพสินค้า
                </th>
                <th scope="col" className="px-6 py-3 ">
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
                <th scope="col" className="px-14 py-3">
                  รายระเอียด
                </th>

                <th scope="col" className="px-6 py-3 ">
                  Action
                </th>

              </tr>
            </thead>
            {/* <tbody className="block md:table-row-group">
              {product.map((item, index) => (
                <tr className="bg-white border-b  hover:bg-gray-50 ">
                  <td key={index} className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <AdminProductCard product={item} />
                  </td>
                </tr>

              ))}
            </tbody> */}
          </table>
        </div>
        <div className="block md:table-row-group"> 
           {product.map((item, index) => (
          <div key={index} className="bg-white border-b  hover:bg-gray-50">
            <AdminProductCard product={item} className="p-2 md:border md:border-grey-500 text-left block md:table-cell"/>
          </div>
        ))}
        </div>
       
      </div>
    </div>
  );
}
