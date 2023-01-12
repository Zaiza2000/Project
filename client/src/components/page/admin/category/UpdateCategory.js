import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
//function
import {
  editCategory,
  getCategory,
} from "../../../../components/functions/category";

const initialstate = {
    category_id: "",
    category_name: "",
    category_detail: "",
  };

export default function UpdateCategory() {
  const param = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState(initialstate);

  useEffect(() => {
   loadData()
  }, []);

  const loadData = () => {
    getCategory(param.id)
    .then((res) =>{
        setValues({...values , ...res.data});

    }).catch((err) =>{
        console.log(err);

    })
  };
 console.log(values);

 const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editCategory(values.category_id,values)
    .then((res)=>{
        console.log(res);
        alert("Update Category success")
        navigate("/admin/create-category")
    }).catch((err)=>{
        alert("Update Error!!!")
        console.log(err);
    })
    
  };

  return (
    <div>
      <h1>Update Category</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>รหัสประเภทของสินค้า</label>
          <input
            className="form-control"
            type="number"
            name="category_id"
            value={values.category_id}
            onChange={handleChange}
            disabled
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
