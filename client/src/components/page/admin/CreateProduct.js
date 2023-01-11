import React, { useState } from "react";
//import { useSelector } from "react-redux";
//function
import { createProduct } from "../../functions/product";

const initialstate = {
  product_name: "",
  product_cost: "",
  product_sale: "",
  product_photo: null,
  product_detail: "",
  product_num: "",
  product_promotion: "",
  category_id: "",
};

export default function CreateProduct() {
  //const { user } = useSelector((state) => ({ ...state }));
  const [values, setValues] = useState(initialstate);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(values)
      .then((res) => {
        alert("Insert Product success");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  //console.log("USER===>", user);
  return (    
    <div>
      <h1>CreateProduct</h1>
      {/* <MenubarAdmin/> */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ชื่อสินค้า</label>
          <input
            className="form-control"
            type="text"
            name="product_name"
            value={values.product_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>ราคาทุน</label>
          <input
            className="form-control"
            type="number"
            name="product_cost"
            value={values.product_cost}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>ราคาขาย</label>
          <input
            className="form-control"
            type="number"
            name="product_sale"
            value={values.product_sale}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>รายละเอียด:</label>
          <input
            className="form-control"
            type="text"
            name="product_detail"
            value={values.product_detail}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>จำนวนสินค้า:</label>
          <input
            className="form-control"
            type="number"
            name="product_num"
            value={values.product_num}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>promotion:</label>
          <input
            className="form-control"
            type="text"
            name="product_promotion"
            value={values.product_promotion}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>รหัสประเภทของสินค้า</label>
          <input
            className="form-control"
            type="number"
            name="category_id"
            value={values.category_id}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
    </div>
  );
}
