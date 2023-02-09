import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import SingleProductCard from '../card/SingleProductCard'

//funtion
import { getProduct } from '../functions/product'

export default function Product() {
    const param = useParams()
    console.log(param.id)
    const [product, setProduct] = useState([])

    useEffect(() => {
        //code
        loadData()
    }, [])

    const loadData = () => {
        getProduct(param.id)
            .then(res => {
                //code

                setProduct(res.data)
            }).catch(err => {
                //err
                console.log(err.response.data)
            })
    }


    return (
        <div className="">
            <div className=" pt-4">
                <SingleProductCard
                    product={product}
                />
            </div>

            {/* <div className="">
                {JSON.stringify(product)}

            </div> */}
        </div>
    )
}