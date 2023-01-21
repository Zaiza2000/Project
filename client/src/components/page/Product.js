import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import SingleProductCard from '../card/SingleProductCard'

//funtion
import { readProduct } from '../functions/product'

export default function Product() {
    // const param = useParams()
    // const [product, setProduct] = useState([])

    // useEffect(()=>{
    //     //code
    //     loadData()
    // },[])

    // const loadData = ()=>{
    //     readProduct(param.id)
    //     .then(res=>{
    //         //code
    //         setProduct(res.data)
    //     }).catch(err=>{
    //         //err
    //         console.log(err.response.data)
    //     })
    // }


    return(
        <div className="container-fluid">

            <div className="row pt-4">
                <SingleProductCard 
                // product={product}
                />
            </div>

            <div className="row">
                {/* {JSON.stringify(product)} */}

            </div>
        </div>
    )
}