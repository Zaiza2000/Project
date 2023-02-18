
import React, { useEffect, useState } from "react";
//Card
import AdminProductCard from "../../card/AdminProductCard";
//function
import { listProduct } from "../../functions/product";

//Page
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

  return (
    
    <div>
      <MenubarAdmin />
      <div className="block md:table-row-group">
        {loading ? (
          <h1 className="text-4xl font-bold text-purple-600 ">Loading.....</h1>
        ) : (
          <h1>.</h1>
        )}

        {product.length < 1 && <p>No Product </p>}
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                Photo
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
              
            </tr>
          </thead>
        </table>

       
          <tbody >
            {product.map((item, index) => (
              <div key={index} className="">
                <AdminProductCard product={item} />
              </div>
            ))}
          </tbody>
       
      </div>
    </div>
  );
}
