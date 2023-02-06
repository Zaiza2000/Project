import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch();
  const { cart, user } = useSelector((state) => ({ ...state }));

  const getTotal = () => {
    return cart.reduce((currenValue, nextValue) => {
      return currenValue + nextValue.count * nextValue.product_sale
    },0);
  };

  return (
    <div>
      {/* <div>
        Cart :{JSON.stringify(cart)}
        <br />
        User : {JSON.stringify(user)}
      </div> */}
      <div>
        <h1>Summary</h1>
        <hr />
        {cart.map((item, index) => (
          <p key={index}>
            {item.product_name} x {item.count} ={" "}
            {item.product_sale * item.count}
          </p>
        ))}
        <hr />
         Total : {getTotal()}
        
      </div>
    </div>
  );
}
