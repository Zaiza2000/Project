// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"
// //funtion
// import { listProduct } from "../functions/product"

// export default function Products() {
//     const param = useParams;
//     const [product , setProduct] = useState;

//     useEffect(() =>{
//         loadData()

//     },[])

//     const loadData = () => {
//         listProduct(param.id)
//         .then((res)=>{
//             console.log(res.data);

//         }).catch((err)=>{
//             console.log(err);
//         })
//     }


//     return(
//         <div>
//             <h1>Product</h1>
//         </div>
//     )
// }