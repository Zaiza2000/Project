//rafce
import React from "react";
import { useDispatch } from "react-redux";

export default function ProductTableInCart({ item }) {
  const dispatch = useDispatch();

  const handleChangeCount = (e) => {
    const count = e.target.value < 1 ? 1 : e.target.value;

    if (count > item.product_quantity) {
      alert('Max avialable Quantity: ' + item.product_quantity)
      return;
    }

    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }

    cart.map((product, i) => {
      if (product.product_id === item.product_id) {
        cart[i].count = count;
      }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "ADD_TO_CART",
      payload: cart,
    });
  };

  const handleRemove = () => {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }

    cart.map((product, i) => {
      if (product.product_id === item.product_id) {
        cart.splice(i, 1)
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "ADD_TO_CART",
      payload: cart,
    });
  }

  return (
    <div>
      <div className="max-w-screen-xl px-4 mx-auto ">
        <div className="max-w-3xl mx-auto">
          <div className="mt-8">
            <ul className="space-y-4">
              <li className="flex items-center">
                <img className="w-36 h-36" alt="" src={item.product_photo} />
                <div className="ml-4">
                  <h3 className="text-m text-gray-900">{item.product_name}</h3>
                  <dl className="mt-0.5 space-y-px text-sm text-gray-600">
                    <div>
                      <dt className="inline" >ราคา {item.product_sale} บาท</dt>
                    </div>
                  </dl>
                </div>

                <div className="flex items-center justify-end flex-1 gap-2">
                  <form>
                    <label for="Line3Qty" class="sr-only"> Quantity </label>

                    <input
                      onChange={handleChangeCount}
                      value={item.count}
                      type="number"
                      id="Line3Qty"
                      className="form-control h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center 
                      text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none "
                    />
                  </form>

                  <button
                    onClick={handleRemove}
                    className="text-gray-600 transition hover:text-red-600">
                    <span className="sr-only">Remove item </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
