import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AdminProductInCart from "../../card/AdminProductInCart";

// function
import { adminCart } from "../../functions/user";


export default function RequisitionDetails() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cartAdmin, user } = useSelector((state) => ({ ...state }));

    const getTotal = () => {
        return cartAdmin.reduce((currenValue, nextValue) => {
            return currenValue + nextValue.count * nextValue.product_cost;
        }, 0);
    };
    const handleSaveOrder = () => {
        // code
        alert("CheckOut Order");
        adminCart(user.token, cartAdmin)
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
            {cartAdmin.map((item) => (
                <AdminProductInCart key={item.product_id} item={item} />
            ))}
        </div>
    );
    return (
        <div className="container-fluid">
            <div className="row">
                <div >
                    <h1 className="text-xl font-bold text-gray-900 sm:text-3xl p-10"> สินค้าที่ต้องสั่งเพิ่ม มี {cartAdmin.length} สินค้า</h1>
                    {!cartAdmin.length ? <p>ไม่มีสินค้าในตะกร้า</p> :
                        showCartItem()
                    }
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
                            <dt>{cartAdmin.map((item, index) => (
                                <div key={index} className="text-left">
                                    {item.product_name} x {item.count}
                                </div>

                            ))}</dt>
                            <dd>{cartAdmin.map((item, index) => (
                                <div key={index}>
                                    {item.product_cost * item.count}
                                </div>
                            ))}</dd>
                        </div>
                        <div className="flex justify-between !text-base font-medium">
                            <dt>Total</dt>
                            <dd>{getTotal()}</dd>
                        </div>
                    </dl>

                    <div className="flex justify-end">

                        <button
                            className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
                            onClick={handleSaveOrder}
                            disabled={!cartAdmin.length}
                        >
                            พิมพ์
                        </button>


                    </div>
                </div>
            </div>
        </div>
    );
}
