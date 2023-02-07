//rafce
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { DeleteOutlined } from "@ant-design/icons";

export default function ProductTableInCart({ item }) {
  const dispatch = useDispatch();

  // const handleChangeCount = (e) => {
  //   const count = e.target.value < 1 ? 1 : e.target.value;

  //   if (count > item.product_quantity) {
  //     toast.error('Max avialable Quantity: ' + item.product_quantity)
  //     return;
  //   }

  //   let cart = [];
  //   if (localStorage.getItem("cart")) {
  //     cart = JSON.parse(localStorage.getItem("cart"));
  //   }

  //   cart.map((product, i) => {
  //     if (product.product_id == item.product_id) {
  //       cart[i].count = count;
  //     }
  //   });

  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   dispatch({
  //     type: "ADD_TO_CART",
  //     payload: cart,
  //   });
  // };

  // const handleRemove = () => {
  //   let cart = [];
  //   if (localStorage.getItem("cart")) {
  //     cart = JSON.parse(localStorage.getItem("cart"));
  //   }

  //   cart.map((product, i) => {
  //     if (product.product_id == item.product_id) {
  //       cart.splice(i, 1)
  //     }
  //   });

  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   dispatch({
  //     type: "ADD_TO_CART",
  //     payload: cart,
  //   });
  // }

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>
              <img className="w-36 h-36" src={item.product_photo} />
            </th>
            <th>{item.product_name}</th>
            <th>{item.product_sale}</th>
            <th>{item.count}</th>
            <th>Remove</th>
          </tr>
        </thead>
      </table>

      {/* <tbody>
      <tr>
        <td>
          <img src={item.photo[0].url} width="100" />
        </td>
        <td>{item.title}</td>
        <td>{item.price}</td>

        <td>
          <input
            onChange={handleChangeCount}
            className="form-control"
            value={item.count}
            type="number"
          />
        </td>

        <td>
          <DeleteOutlined
            onClick={handleRemove}
            className="text-danger" />
        </td>
      </tr>
    </tbody> */}
    </div>
  );
}
