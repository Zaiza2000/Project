import React from "react";
import { useSelector, useDispatch } from "react-redux";

// lodash
import _ from 'lodash'
import { Link } from "react-router-dom";

export default function CardProductMember({ product }) {
  const dispatch = useDispatch()

  //console.log(product);
  const { product_id, product_name, product_sale, product_photo, product_detail } = product;

  const handleAddToCart = () => {
    let cart = []
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'))
    }
    cart.push({
      ...product,
      count: 1
    })
    let unique = _.uniqWith(cart, _.isEqual)

    localStorage.setItem("cart", JSON.stringify(unique))


    dispatch({
      type: "ADD_TO_CART",
      payload: unique
    })
    dispatch({
      type: 'SET_VISIBLE',
      payload: true
    })

  }
  return (
    <div>
      <div className="p-6">
        <div className="w-80 h-[30rem] max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
          <Link to={'/product/'+ product_id}>
            <img
              className="rounded-t-lg h-64 w-80"
              src={product_photo && product_photo.length
                ? product_photo
                : ""}
              alt=""

            />
          </Link>

          <div className="p-2">

            <h5 className="text-gray-900 text-xl font-medium mb-2">{product_name}</h5>
            <p className="text-gray-700 text-base mb-5">
              {product_detail}
            </p>
            <p className="text-red-500 text-base mb-6 font-bold">
              {product_sale} บาท
            </p>
            <button className="bg-blue-700 hover:bg-blue-400 text-white font-bold py-1 px-2 border rounded"
              onClick={handleAddToCart}>
              เพิ่มลงในรถเข็น
            </button>

          </div>
        </div>

      </div>
      <div>

      </div>
    </div>
  );
}
