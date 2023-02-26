import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//Card
import AdminProductCard from "../../card/AdminProductCard";
//function
import { listProduct } from "../../functions/product";
//Page
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
    <div>
      <MenubarAdmin />

      <div className="">
        {loading ? (
          <h1 className="text-4xl font-bold text-purple-600 ">Loading.....</h1>
        ) : (
          <h1>.</h1>
        )}

        {/* Show Product Cart */}
        <div className="">
          {cartAdmin.map((item, index) => (
            <div key={index} className="">
              {item.product_name} x {item.count}
              <hr />
            </div>
          ))}
        </div>

        {/* Data Product */}
        <div>
          {product.length < 1 && <p>No Product </p>}

          
          <table class="w-full text-sm text-left text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              
              <th scope="col" class="flex-initial pl-[20%] py-3">
                ชื่อสินค้า
              </th>
              <th scope="col" class="flex-initial pl-[19%]  py-3">
                ราคาต้นทุน
              </th>
              <th scope="col" class="flex-initial pl-[14%] py-3">
                ราคาขาย
              </th>
              <th scope="col" class="flex-initial pl-[11%] py-3">
                จำนวนสินค้า
              </th>
              <th scope="col" class="flex-initial pl-[5%] py-3">
                รายระเอียด
              </th>
             
              <th scope="col" class="flex-initial pl-[1%] py-3">
                Action
              </th>
              
            </tr>
          </thead>
        </table>
        </div>
        {product.map((item, index) => (
          <div key={index} className="">
            <AdminProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
