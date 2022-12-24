import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css';

export default class LandingPage extends Component {
    render() {
        return (
            <div className="App">
                <section
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
                </section >
            </div >
        );
    }
}
