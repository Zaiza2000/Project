import React, { useState } from "react";
//function
import { createCategory } from '../../functions/category';

const initialstate = {
    category_id:"",
    category_name:"",
    category_detail:"",
  };

export default function CreateCategory(){
    const [values, setValues] = useState(initialstate);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory(values)
      .then((res) => {
        alert("Insert Category success");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (    
    <div>
      <h1>CreateCategory</h1>
      <form onSubmit={handleSubmit}>
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
        <div className="form-group">
          <label>ชื่อประเภทของสินค้า</label>
          <input
            className="form-control"
            type="text"
            name="category_name"
            value={values.category_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>รายละเอียดประเภทสินค้า</label>
          <input
            className="form-control"
            type="text"
            name="category_detail"
            value={values.category_detail}
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

