import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//Card
import CardProductMember from "../../card/CardProductMember";
//Layouts
import NavbarLogin from "../../layouts/NavbarLogin";
import MenubarMember from "../../layouts/MenubarMember";
//function
import { listProduct } from "../../functions/product";

export default function Shop() {
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
      {/* <div>
        <NavbarLogin />
        <MenubarMember />
        <h1>Shop</h1>
      </div> */}
      
      <div className="">
        {loading ? (
          <h1 className="text-4xl font-bold text-purple-600">Loading.....</h1>
        ) : (
          <h1>Product</h1>
        )}

            {product.length < 1 && <p>No Product </p> }

        <div className=" grid grid-cols-5 gap-4">
          {product.map((item,index) => (
            <div key={index} className="">
              <CardProductMember product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
