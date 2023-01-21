import React from "react";

export default function CardProduct({ product }) {
  //console.log(product);
  const { product_name, product_sale, product_photo, product_detail } = product;
  

  return (
    <div>
      <div className="">
        <div className="w-80 h-[28rem] max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
          
            <img
              className="rounded-t-lg h-64 w-80"
              src={product_photo && product_photo.length 
                                    ? product_photo
                                    : ""}
              alt=""
            />
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{product_name}</h5>
            <p className="text-gray-700 text-base mb-5">
              {product_detail}
            </p>
            <p className="text-red-500 text-base mb-6 font-bold">
              {product_sale} บาท
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
}
