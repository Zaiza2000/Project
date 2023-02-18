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
    <div>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td
          scope="row"
          class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
        >
          {" "}
          <span className="inline-block w-1/3 md:hidden font-bold"></span>
          {product_id}
        </td>
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold"></span>

          {product_name}
        </td>
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold"></span>

          {product_cost}
        </td>
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold"></span>

          {product_sale}
        </td>
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold"></span>

          {product_quantity}
        </td>
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold"></span>

          {product_detail}
        </td>
      </tr>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
      <span className="inline-block w-1/3 md:hidden font-bold"></span>

        <img className="rounded-t-lg h-32 w-32" src={product_photo} alt="" />
      </td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <button
          className="bg-blue-700 hover:bg-blue-400 text-white font-bold py-1 px-2 border rounded"
          onClick={handleAddToCart}
        >
          เบิกสินค้า
        </button>
      </td>
    </div>

  );
}
