import React, { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
//function
import { createProduct } from "../../functions/product";

const initialstate = {
  product_name: "",
  product_cost: "",
  product_sale: "",
  product_photo: "",
  product_detail: "",
  product_num: "",
  category_id: "",
};

export default function CreateProduct() {
  const { user } = useSelector((state) => ({ ...state }));
  const [values, setValues] = useState(initialstate);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(user.token, values)
      .then((res) => {
        console.log(res.data);
        toast.success("Insert " + res.data.product_name + "success")
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response.data);
      });
  };

  //console.log("USER===>", user);
  return (
    <div>
      <h1>CreateProduct</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>
          <input
            className="form-control"
            type="text"
            name="product_name"
            value={values.product_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Product Cost:</label>
          <input
            className="form-control"
            type="number"
            name="product_cost"
            value={values.product_cost}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Product Sale:</label>
          <input
            className="form-control"
            type="number"
            name="product_sale"
            value={values.product_sale}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Product Detail:</label>
          <input
            className="form-control"
            type="text"
            name="product_detail"
            value={values.product_detail}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Product num:</label>
          <input
            className="form-control"
            type="number"
            name="product_num"
            value={values.product_num}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Category_id</label>
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
