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

  };

  return (
    <tr className="bg-white border-b  hover:bg-gray-50 ">
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <img className="w-24 h-24 rounded-full" src={product_photo} alt="" />
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="text-sm font-medium inline-block text-gray-900 truncate ">
          {product_id}
        </span>
        <span className="text-sm text-gray-900 truncate inline-block">
          {product_name}
        </span>
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        {product_cost}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        {product_sale}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        {product_quantity}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        {product_detail}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <button
          className=" bg-blue-700 hover:bg-blue-400 text-white font-bold py-1 px-2 border rounded"
          onClick={handleAddToCart}
        >
          เบิกสินค้า
        </button>
      </td>
    </tr>
  );
}
