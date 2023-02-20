import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// lodash
import _ from "lodash";

export default function AdminProductCard({ product }) {
  const dispatch = useDispatch();

  //console.log(product);
  const {
    product_id,
    product_name,
    product_cost,
    product_sale,
    product_photo,
    product_quantity,
    product_detail,
  } = product;

  const handleAddToCart = () => {
    let cartAdmin = [];
    if (localStorage.getItem("cartAdmin")) {
      cartAdmin = JSON.parse(localStorage.getItem("cartAdmin"));
    }
    cartAdmin.push({
      ...product,
      count: 1,
    });
    let unique = _.uniqWith(cartAdmin, _.isEqual);

    localStorage.setItem("cartAdmin", JSON.stringify(unique));

    dispatch({
      type: "ADD_PRODUCT",
      payload: unique,
    });
    dispatch({
      type: "SET_VISIBLE",
      payload: true,
    });
  };
  return (
    <div className="">
      <ul className="divide-gray-200 dark:divide-gray-700">
        <li className="">
          <div className="flex items-center ">
            <div className="flex-initial w-64">
              <img className="w-24 h-24 rounded-full" src={product_photo} />
            </div>
            <div className="flex-initial w-64 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {product_id}
              </p>
              <p className="text-sm text-gray-900 truncate dark:text-gray-400">
                {product_name}
              </p>
            </div>
            <div className="flex-initial w-64 text-base font-semibold text-gray-900 dark:text-white">
              {product_cost}
            </div>
            <div className="flex-initial w-64 text-base font-semibold text-gray-900 dark:text-white">
              {product_sale}
            </div>
            <div className="flex-initial w-64 text-base font-semibold text-gray-900 dark:text-white">
              {product_quantity}
            </div>
            <div className="flex-initial w-64 text-base font-semibold text-gray-900 dark:text-white">
              {product_detail}
            </div>
            <div className="flex-initial w-64 text-base font-semibold text-gray-900 dark:text-white">
            <button
          className="flex-initial w-32 bg-blue-700 hover:bg-blue-400 text-white font-bold py-1 px-2 border rounded"
          onClick={handleAddToCart}
        >
          เบิกสินค้า
        </button>
            </div>
           
          </div> <hr />
        </li>
      </ul>
    </div>
  );
}
