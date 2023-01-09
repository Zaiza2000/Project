import React , {useState} from "react";

const initialstate = {
  product_name: "",
  product_cost: "",
  product_sale: "",
  product_photo: "",
  product_detail: "",
  product_num: "",
  category_id: "",
};

export default function ProductPage() {
  const [value, setValue] = useState({
    product_name: "",
    product_cost: "",
    product_sale: "",
    product_photo: "",
    product_detail: "",
    product_num: "",
    category_id: "",
  });
  return (
    <div>
      <h1>Product</h1>
    </div>
  );
}
