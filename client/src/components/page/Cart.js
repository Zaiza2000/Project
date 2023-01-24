import React from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Cart() {
    const dispatch = useDispatch()
    const { cart, user } = useSelector((state) => ({ ...state }));

// console.log("Cart=>" ,cart);
    return (
        <div>
            <div>
                {JSON.stringify(cart)}
                {JSON.stringify(user)}
            </div>
        </div>
        
    );
}
