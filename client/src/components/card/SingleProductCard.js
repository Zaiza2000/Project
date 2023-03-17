// rafce
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useSelector, useDispatch } from "react-redux";
import { userCart } from "../functions/user";
// lodash
import _ from "lodash";


export default function SingleProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, user } = useSelector((state) => ({ ...state }));

  console.log(product);
  const {
    product_name,
    product_detail,
    product_photo,
    product_sale,
  } = product;

  const handleAddToCart = () => {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.push({
      ...product,
      count: 1,
    });
    let unique = _.uniqWith(cart, _.isEqual);

    localStorage.setItem("cart", JSON.stringify(unique));

    dispatch({
      type: "ADD_TO_CART",
      payload: unique,
    });
    dispatch({
      type: "SET_VISIBLE",
      payload: true,
    });

  };
  const handleSaveOrder = () => {
    // code
    alert("CheckOut Order");
    userCart(user.token, cart)
      .then((res) => {
        console.log(res);
        navigate("/checkout");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex p-20">
      <div className="flex-1 w-64">
        <div className="p-6 ">
          <img
            className="h-80 w-80 hover:scale-110"
            src={product_photo && product_photo.length ? product_photo : ""}
            alt=""
          />
        </div>
      </div>
      <div className="flex-1 w-64">

        <div className="p-2 text-start">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {product_name}
          </h5>
          <p className="text-gray-700 text-base mb-5">{product_detail}</p>
          <p className="text-red-500 text-base mb-6 font-bold">
            {product_sale} บาท
          </p>
          <div>
            <button
              className="bg-red-700 hover:bg-red-400 text-white font-bold py-1  w-3/4 border rounded mb-2"
              onClick={handleAddToCart}
            >
              เพิ่มลงในรถเข็น
            </button>
          </div>

          <div>
            {user ? (
              <button
                className="bg-gray-700 hover:bg-gray-400 text-white font-bold py-1 w-3/4 border rounded"
                onClick={handleSaveOrder}
                disabled={!cart.length}
              >
                ชำระเงิน
              </button>
            ) : (
              <button className="bg-gray-700 hover:bg-gray-400 text-white font-bold py-1 w-3/4 border rounded">
                <Link to="/login" state="shop">
                  เข้าสู่ระบบเพื่อสั่งสินค้า
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
