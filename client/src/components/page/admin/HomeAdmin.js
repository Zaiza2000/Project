import NavbarLogin from "../../layouts/NavbarLogin";
import MenubarAdmin from "../../layouts/MenubarAdmin";
import AdminProductCard from "../../card/AdminProductCard";
import React, { useState, useEffect } from "react";

const initialstate = {
    product_name: "",
    product_cost: "",
    product_sale: "",
    product_photo: "",
    product_detail: "",
    product_num: "",
    category_id: "",
};
export default function HomeAdmin() {
    const [value, setValue] = useState({
        product_name: "",
        product_cost: "",
        product_sale: "",
        product_photo: "",
        product_detail: "",
        product_num: "",
        category_id: "",
    });
    // useEffect(() => {
    //     loadData();
    //   }, []);
    
    //   const loadData = () => {
    //     listCategory()
    //       .then((res) => {
    //         setCategory(res.data);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   };
    return (
        <div>
            <NavbarLogin />
            <h1>HomeAdmin</h1>
            <MenubarAdmin />
            {/* {
                product_photo.map((item) => (
                    <AdminProductCard />
                ))
            } */}

        </div>

    )
}