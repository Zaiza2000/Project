import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
//function
import {
  editCategory,
  getCategory,
} from "../../../../components/functions/category";

export default function UpdateCategory() {
  const param = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    loadData(param.id);
  }, []);

  const loadData = (id) => {
    getCategory(id)
      .then((res) => {
        setName(res.data.category_name, res.data.category_detail);
      })
      .catch((err) => {
        console.log(err);
      });
  };
 console.log(name);

  return (
    <div>
      <h1>Update Category</h1>
      {/* <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ชื่อประเภทของสินค้า</label>
          <input
            className="form-control"
            type="text"
            name="category_name"
            value={name}
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
      </form> */}
    </div>
  );
}
