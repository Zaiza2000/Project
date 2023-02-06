import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ProductTableInCart from "../card/ProductTableInCart";
import { userCart } from "../functions/user";
// function
// import { userCart } from "./functions/users";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, user } = useSelector((state) => ({ ...state }));


  const getTotal = () => {
    return cart.reduce((currenValue, nextValue) => {
      return currenValue + nextValue.count * nextValue.product_sale
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
  // const showCartItem = () => (
  //   <table >
  //     <tr>
  //       <td>Image</td>
  //       <td>Title</td>
  //       <td>Price</td>
  //       <td>Count</td>
  //       <td>Remove</td>
  //     </tr>
  //     {cart.map((item) => (
  //       <ProductTableInCart key={item._id} item={item} />
  //     ))}
  //   </table>
  // );

  return (
    <div className="container-fluid">
      <div className="row">
        {/* <div className="col-md-8">
          <h4> Cart / {cart.length} product</h4>
          {!cart.length ? <p>No Product in Cart</p> : showCartItem()}
        </div> */}

        <div className="col-md-4">
          <h4>Summary</h4>
          <hr />
          {cart.map((item, index) => (
            <p key={index}>
              {item.product_name} x {item.count} ={" "}
              {item.product_sale * item.count}
            </p>
          ))}
          <hr />
          Total : <b> {getTotal()} </b>
          <hr />
          {user ? (
            <button
              className="btn btn-success"
              onClick={handleSaveOrder}
              disabled={!cart.length}
            >
              Check Out
            </button>
          ) : (
            <button className="btn btn-danger">
              <Link to="/login" state="cart">
                Login to CheckOut
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>

    //         <div>
    //           <h1>Summary</h1>
    //           <hr />
    //           {cart.map((item, index) => (
    //             <p key={index}>
    //               {item.product_name} x {item.count} ={" "}
    //               {item.product_sale * item.count}
    //             </p>
    //           ))}
    //           <hr />
    //           Total : {getTotal()}
    //   </div> 
  );
}
