import React from "react";

export default function CardProduct({ product }) {
  console.log(product);
  const { product_name, product_sale, product_photo, product_detail } = product;

  return (
    <div>
      <div class="">
        <div class="w-80 h-[28rem] max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          
            <img
              class="rounded-t-lg h-64 w-80"
              src={product_photo && product_photo.length 
                                    ? product_photo
                                    : ""}
              alt=""
            />
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{product_name}</h5>
            <p class="text-gray-700 text-base mb-5">
              {product_detail}
            </p>
            <p class="text-red-500 text-base mb-6 font-bold">
              {product_sale} บาท
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
}
