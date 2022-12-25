import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css';

export default function LandingPage() {
    return (
        <div className="App">
            {/* <section
                    className="relative bg-[url(https://lh5.googleusercontent.com/p/AF1QipM7r8QDnx3kNkqAodgKB9x9l6CEiYpueL1TKsP3=w1080-k-no)] bg-cover bg-center bg-no-repeat"
                >
                    <div
                        className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
                    ></div>

                    <div
                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                    >
                        <div className="max-w-xl text-center sm:text-left">
                            <h1 className="text-3xl font-extrabold sm:text-5xl">
                                ปรีชาพานิชย์

                                <strong className="block font-extrabold text-rose-700">
                                    ยินดีต้อนรับ
                                </strong>
                            </h1>

                            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                                ต้องการให้เราแนะนำรถให้ท่านหรือไม่
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-center">
                                <Link to={"/login"}>
                                    <button
                                        className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                    >
                                        เข้าสู่ระบบ
                                    </button>
                                </Link>
                                <Link to={"/sign-up"}>
                                    <button
                                    className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                                >
                                    สมัครสมาชิก
                                </button>
                            </Link>
                        </div>
                    </div>
            </div>
                </section > */}
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
                                        src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                                        alt="image"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <span
                                        className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
                                    >
                                        Dec 22, 2023
                                    </span>
                                    <h3>
                                        <a
                                            href="javascript:void(0)"
                                            className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                        >
                                            Meet AutoManage, the best AI management tools
                                        </a>
                                    </h3>
                                    <p className="text-body-color text-base">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
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
                                    <span
                                        className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
                                    >
                                        Mar 15, 2023
                                    </span>
                                    <h3>
                                        <a
                                            href=""
                                            className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                        >
                                            How to earn more money as a wellness coach
                                        </a>
                                    </h3>
                                    <p className="text-body-color text-base">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
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
                                    <span
                                        className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
                                    >
                                        Jan 05, 2023
                                    </span>
                                    <h3>
                                        <a
                                            href="javascript:void(0)"
                                            className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                        >
                                            The no-fuss guide to upselling and cross selling
                                        </a>
                                    </h3>
                                    <p className="text-body-color text-base">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
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

