
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { Button, Drawer } from 'antd';
import { userCart } from "../functions/user";
export default function SideDrawer(item) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cart, drawer, user } = useSelector((state) => ({ ...state }))

    const onCloseDrawer = () => {
        dispatch({
            type: "SET_VISIBLE",
            payload: false,
        });
    }
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
    }
    return (

        <div>
            <Drawer
                title={"ตะกร้ามีสินค้า " + cart.length + " รายการ"}
                onClose={onCloseDrawer}
                placement="right"
                visible={drawer}
            >
                {cart.map((item) =>
                    <div className='mt-8'>
                        <div className='flow-root'>
                            <ul className='-my-6 divide-y divide-gray-200'>
                                <li className="flex py-6">
                                    <div>
                                        <img
                                            className="h-75% w-75% object-cover object-center"
                                            src={item.product_photo}
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>{item.product_name}</h3>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            {/* <p className="text-gray-500"> {item.count} ชิ้น </p> */}
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

                                        </div>
                                        <div className="">
                                            <p
                                                className="font-medium "
                                            >
                                                {item.product_sale * item.count} บาท
                                            </p>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>)}

                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>ราคารวม </p>
                        <p>{getTotal()} บาท</p>
                    </div>
                    {/* <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p> */}
                    <div className="mt-6">
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
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                            or
                            <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"

                            >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                            </button>
                        </p>
                    </div>
                </div>

            </Drawer>
        </div>

    )
}