import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ProductTableInCart from "../card/ProductTableInCart";
// function
import { userCart } from "../functions/user";


export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, user } = useSelector((state) => ({ ...state }));

  const getTotal = () => {
    return cart.reduce((currenValue, nextValue) => {
      return currenValue + nextValue.count * nextValue.product_sale;
    }, 0);
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

  const showCartItem = () => (
    <div>
      {cart.map((item) => (
        <ProductTableInCart key={item.product_id} item={item} />
      ))}
    </div>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div >
          <h1 className="text-xl font-bold text-gray-900 sm:text-3xl p-10"> ตะกร้าของคุณมี {cart.length} สินค้า</h1>
          {!cart.length ? <p>ไม่มีสินค้าในตะกร้า</p> : showCartItem()}
        </div>
      </div> 
      <div className="flex justify-center p-10 pt-8 mt-8 border-t border-gray-100">
        <div className="w-screen max-w-lg space-y-4 ">
          <dl className="space-y-0.5 text-sm text-gray-700 ">
            <div className="flex justify-between !text-base font-extrabold text-left">
              <dt >รายการสินค้า</dt>
              <dd>ราคา</dd>
            </div>

            <div className="flex justify-between ">
              <dt>{cart.map((item, index) => (
                <div key={index} className="text-left">
                  {item.product_name} x {item.count}
                </div>

              ))}</dt>
              <dd>{cart.map((item, index) => (
                <div key={index}>
                  {item.product_sale * item.count}
                </div>
              ))}</dd>
            </div>
            <div className="flex justify-between !text-base font-medium">
              <dt>Total</dt>
              <dd>{getTotal()}</dd>
            </div>
          </dl>

          <div className="flex justify-end">
            {user ? (
              <button
                className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
                onClick={handleSaveOrder}
                disabled={!cart.length}
              >
                ชำระเงิน
              </button>
            ) : (
              <button className="block px-5 py-3 text-sm text-gray-100 transition bg-red-500 rounded hover:bg-gray-600">
                <Link to="/login" state="cart">
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
