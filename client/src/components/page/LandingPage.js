import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import Navbar from "../layouts/Navbar";

export default function LandingPage() {
    return (
        <div className="App">
            <Navbar />
            <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                                <span className="text-primary mb-2 block text-lg font-semibold">
                                    ยินดีต้อนรับ
                                </span>
                                <h2
                                    className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
                                >
                                    ปรีชาพานิชย์
                                </h2>
                                <p className="text-body-color text-base">
                                    อะไหล่ Honda แท้
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mx-auto mb-10 max-w-[370px]">
                                <div className="mb-8 overflow-hidden rounded">
                                    <img
                                        src="https://static.wixstatic.com/media/3d8c2f_05784e76280949e3930b00d8ea894327~mv2.jpg/v1/fill/w_980,h_511,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d8c2f_05784e76280949e3930b00d8ea894327~mv2.jpg"
                                        alt="image"
                                        className="w-full"
                                    />
                                </div>
                                <div>

                                    <h3>
                                        <a
                                            href="javascript:void(0)"
                                            className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                        >
                                            ร้านจัดจำหน่ายอะไหล่รถจักรยานยนต์ Honda
                                        </a>
                                    </h3>
                                    <p className="text-body-color text-base">
                                        ราคาเป็นมิตร
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mx-auto mb-10 max-w-[370px]">
                                <div className="mb-8 overflow-hidden rounded">
                                    <img
                                        src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-02.jpg"
                                        alt="image"
                                        className="w-full"
                                    />
                                </div>
                                <div>

                                    <h3>
                                        <a
                                            href=""
                                            className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                        >
                                            สะดวก ปลอยภัย ไม่ต้องเดินทาง
                                        </a>
                                    </h3>
                                    <p className="text-body-color text-base">
                                        สั่งซื้อได้ทางออนไลน์
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mx-auto mb-10 max-w-[370px]">
                                <div className="mb-8 overflow-hidden rounded">
                                    <img
                                        src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg"
                                        alt="image"
                                        className="w-full"
                                    />
                                </div>
                                <div>

                                    <h3>
                                        <a
                                            href="javascript:void(0)"
                                            className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                        >
                                            สินค้ามีปัญหาเคลมได้
                                        </a>
                                    </h3>
                                    <p className="text-body-color text-base">
                                        หากลูกค้าซื้อสินค้ากับทางร้านแล้วมีปัญหา ลูกค้าสามารถนำสินค้าตัวนั้นมาเคลมกับทางร้านได้เลย (เงื่อนไขเป็นไปตามที่บริษัทกำหนด)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    );
}

