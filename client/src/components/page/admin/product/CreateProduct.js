import React, { useState, useEffect } from "react";
//function
import { createProduct,listProduct,deleteProduct} from "../../../../components/functions/product";

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
  const [values, setValues] = useState(initialstate);
  const [product , setProduct] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    listProduct()
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (id) => {
    if(window.confirm("Are you sure to delete?")){
      deleteProduct(id)
      .then((res) => {
        console.log(res);
        loadData();
      })
      .catch((err) => {
        console.log(err.response.data);
      })
  }
}

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(values)
      .then((res) => {
        alert("Insert Product success");
        loadData();
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

      <div className="table" >
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Product ID
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Name
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Cost
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Sale
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Quantity
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Detail
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Promotion
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {product.map((item) => (
              
              <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {item.product_id}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {item.product_name}
                </td>

                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {item.product_cost}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {item.product_sale}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {item.product_num}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {item.product_detail}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {item.product_promotion}
                </td>
                
                
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Actions
                  </span>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                    Edit
                  </button>
                  <button onClick={()=> handleDelete(item.product_id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
