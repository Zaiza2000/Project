import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//Card
import CardProductMember from "../../card/CardProductMember";
//function
import { listProduct } from "../../functions/product";
import {
  List,
  ListItem,
  Range,
} from 'konsta/react';
export default function Shop() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState([]);
  const [price, setPrice] = useState(150);
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
    <div >
      <h1 className="text-6xl font-extrabold sm:text-6xl m-20  text-left ">
        สินค้าทั้งหมด
      </h1>

      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <div className="text-3xl sm:text-4xl col-span-2 pl-36 text-left pr-20">กรองตาม
          <label className="block mb-2 text-2xl text-left pt-20">ราคา {price} ฿</label>
          {/* <input type="range" min="0" max="10" value="5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"></input> */}
          <div className="flex space-x-4">
            <span className="text-2xl">0฿</span>
            <Range
                    className="bg-black"
                    value={price}
                    step={1}
                    min={0}
                    max={1000}
                    onChange={(e) => setPrice(e.target.value)}
                  />
            <span className="text-2xl ">1000฿</span>
          </div>


          {/* <List strong insetMaterial outlineIos >
            <ListItem
            
              innerClassName="flex space-x-4"
              innerChildren={
                <>
                  <span className="text-2xl ">0฿</span>
                  <Range
                    className="bg-red-200"
                    value={price}
                    step={1}
                    min={0}
                    max={1000}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <span className="text-2xl ">1000฿</span>
                </>
              }
            />
          </List> */}
          <h4 className="text-2xl text-left pt-20 pb-5">ประเภทสินค้า</h4>
          <div class="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2  "></input>
            <label for="default-checkbox" className="ml-2 text-xl">แบตเตอรี่</label>
          </div>
          <div class="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2  "></input>
            <label for="default-checkbox" className="ml-2 text-xl">H2C</label>
          </div>
        </div>
        <div className="row-span-2 col-span-2 ">

        </div>

        <div className="row-span-3">
          {loading ? (
            <h1 className="text-4xl font-bold text-purple-600 ">Loading.....</h1>
          ) : (
            <h1 >
            </h1>
          )}

          {product.length < 1 && <p>No Product </p>}

          <div className=" grid grid-cols-3 gap-4">
            {product.map((item, index) => (
              <div key={index} className="">
                <CardProductMember product={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
