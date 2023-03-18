// import Search from "antd/es/transfer/search";
import MultiRangeSlider from "multi-range-slider-react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// antd
import { Checkbox } from "antd";

//Card
import CardProductMember from "../../card/CardProductMember";
import Search from "../../card/Search";
//function
import { listProduct, searchFilters } from "../../functions/product";
import { listCategory } from "../../functions/category"

export default function Shop() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState([]);
  const [price, setPrice] = useState([0, 0]);
  // Category
  const [category, setCategory] = useState([]);
  const [categorySelect, setCategorySelect] = useState([]);

  const { search } = useSelector((state) => ({ ...state }))
  console.log(search)
  const { text } = search
  //text

  useEffect(() => {
    loadData();
    listCategory().then(res => setCategory(res.data))
  }, []);

  const loadData = () => {
    setLoading(true);
    listProduct()
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  // ########## load data on user filter ##########
  // useEffect(() => {
  //   const delay = setTimeout(() => {
  //     fetchDataFilter({ query: text });
  //     if (!text) {
  //       loadData();
  //     }
  //   }, 300);
  //   return () => clearTimeout(delay);
  // }, [text]);

  //****Filter*****

  const fetchDataFilter = (arg) => {
    searchFilters(arg).then((res) => {
      setProduct(res.data)
    });
  };
  const handleCheck = (e) => {
    // ค่าปัจจุบันที่ Check 
    let inCheck = e.target.value
    // ค่าเดิมของ Check 
    let inState = [...categorySelect]

    let findCheck = inState.indexOf(inCheck)
    if(findCheck === -1) {
      inState.push(inCheck)
    }else{
      inState.splice(findCheck, 1)
    }
    setCategorySelect(inState)
    fetchDataFilter({category:inState})
    if(inState.length < 1){
      loadData()

    }
  }
  return (
    <div >
      <h1 className="text-4xl font-extrabold sm:text-4xl m-20  text-left ">
        สินค้าทั้งหมด
      </h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="">
          <div className="h-14 text-3xl col-span-2 pl-20 pr-20 text-left">ค้นหาสินค้า
            <Search />
            <label className="block mb-2 text-2xl text-left">
              ราคา
              {/* {price} ฿ */}
            </label>

            <MultiRangeSlider
              className=" h-2 appearance-none cursor-pointer"
              value={price}
              min={0}
              max={1000}
              onChange={(e) => setPrice(e.target.value)}
            />
            <hr />
            <h4 className="text-2xl text-left pt-20 pb-5">ค้นหาตามหมวดหมู่สินค้า</h4>
            <div className="items-center mb-4">
              {category.map((item,index) =>
                <Checkbox
                  onChange={handleCheck}
                  value={item.category_id}
                  className="w-4 h-4 m-10  bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2">
                  <div className="ml-2 text-xl">
                    {item.category_name}
                  </div>
                </Checkbox>
              )}

            </div>
            {/* <div className="flex items-center mb-4">
              <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2  "></input>
              <label for="default-checkbox" className="ml-2 text-xl">H2C</label>
            </div> */}
          </div>
        </div>
        {/* <div className="row-span-2 col-span-2 ">

        </div> */}

        <div className="col-span-2">
          {loading ? (
            <h1 className="text-4xl font-bold text-purple-600 ">Loading.....</h1>
          ) : (
            <h1 >
            </h1>
          )}

          {product.length < 1 && <p>No Product </p>}

          <div className=" grid grid-cols-3 gap-4">
            {product.map((item, index) => (
              <div key={index} className="">
                <CardProductMember product={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}
