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

      <div className="mr-[1%] ml-[14%] mt-[-9%] rounded-xl bg-white p-6 ring ring-indigo-50 sm:p-8">
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
          <h3 className="text-4xl font-bold text-purple-600">สั่งสินค้า</h3>
          {product.length < 1 && <p>No Product </p>}

          <table className="mt-10 w-full text-l text-left text-gray-900">
            <thead className="text-l text-gray-700 uppercase bg-blue-200  ">
              <tr>

                <th scope="col" className="flex-initial pl-[20%] py-3">
                  ชื่อสินค้า
                </th>
                <th scope="col" className="flex-initial pl-[19%]  py-3">
                  ราคาต้นทุน
                </th>
                <th scope="col" className="flex-initial pl-[16%] py-3">
                  ราคาขาย
                </th>
                <th scope="col" className="flex-initial pl-[13%] py-3">
                  จำนวนสินค้า
                </th>
                <th scope="col" className="flex-initial pl-[8%] py-3">
                  รายระเอียด
                </th>

                <th scope="col" className="flex-initial pl-[5%] py-3">
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
