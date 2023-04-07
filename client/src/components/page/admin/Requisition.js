import React, { useEffect, useState } from "react";

//Card
import AdminProductCard from "../../card/AdminProductCard";
//function
import { listProduct } from "../../functions/product";
//layout
import MenubarAdmin from "../../layouts/MenubarAdmin";

export default function Requisition() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState([]);
  

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

  const tableData = () => (
    product.map((item, index) => (
      // <div key={index} className="">
      <AdminProductCard product={item} />
      // </div>
    ))
  )

  return (
    <div className="flex flex-row">
      <MenubarAdmin />

      <div className="pr-16">
        {loading ? (
          <h1 className="text-4xl font-bold text-purple-600 ">Loading.....</h1>
        ) : (
          <h1>.</h1>
        )}

        

        {/* Data Product */}
        <div className="">
          <h3 className="text-4xl font-bold text-purple-600">เบิกสินค้า</h3>
          {product.length < 1 && <p>No Product </p>}

          <table className="mt-10 pr-15 w-full text-l text-left text-gray-900 ">
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
           
            {tableData()}
          </table>
        </div>
        <div>

        </div>

      </div>
    </div>
  );
}
