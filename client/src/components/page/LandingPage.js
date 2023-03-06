import React, { useEffect, useState } from "react";
// import { json, Link } from "react-router-dom";
import "../../App.css";
import Navbar from "../layouts/Navbar";
import CardProductMember from "../card/CardProductMember";
//function
import { listProduct } from "../functions/product";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function LandingPage() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = (id) => {
    setLoading(true);
    listProduct(id)
      .then((res) => {
        setLoading(false);
        setProduct(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div >
        <div
          className="mx-auto max-w-screen-xl  py-12 "
        >
          <div className="mx-auto  text-center bg-white">
            <h1 className="text-3xl font-extrabold text-red-700 sm:text-4xl">
              จำหน่ายอะไหล่รถจักรยานยนต์ฮอนด้า

            </h1>
          </div>

        </div>
        <section className="pb-5  lg:pb-20 ">
          <div className="container mx-auto">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className="object-fill w-full "
                  src="https://drive.google.com/uc?id=1wr4ggxR7fZUp-27CbQq2gOPVD1i4xrDZ"
                  aria-hidden
                  alt="image slide 1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-fill w-full "
                  src="https://drive.google.com/uc?id=1qSv_RtF6--6W3EdSWdptfIIqi725yyFv"
                  aria-hidden
                  alt="image slide 3"
                />
              </SwiperSlide>
            </Swiper>

          </div>
        </section>
      </div>
      <div className="flex justify-center mx-auto text-left">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          สินค้าทั้งหมด
        </h1>
      </div>
      <div className="flex justify-center mb-10 pt-32">
        {loading ? <h1 className="text-4xl font-bold text-purple-600">Loading.....</h1> : <div className="flex justify-center"><h1> </h1></div>}

        <div className=" grid grid-cols-4 gap-8 content-start">
          {product.map((item, index) => (
            <div key={index} className="">
              <CardProductMember product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
