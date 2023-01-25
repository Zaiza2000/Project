import { Fragment } from "react";
import { Radio } from "@material-tailwind/react";

export default function CheckOut() {
    return (
        <div >
            <h1 className="text-4xl font-extrabold sm:text-6xl m-20 ">
                สั่งซื้อสินค้า
            </h1>
            <div className="flex space-x-10 m-20">
                <div id="checkout" className="flex-1 w-26 ">
                    ที่อยู่สำหรับจัดส่งสินค้า
                    <div class="flex ">
                        <div>
                            <div class="form-check">
                                <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault10" checked></input>
                                <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                                    ใช้ที่อยู่เดียวกับที่อยู่ของสมาชิก
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault20"></input>
                                <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
                                    ใช่ที่อยู่ใหม่
                                    <form className="mt-6">
                                        <div className="mb-2">
                                            <label
                                                for="text"
                                                className="block text-sm font-semibold text-gray-800"
                                            >
                                                ชื่อ
                                            </label>
                                            <input
                                                type="text"
                                                name="firstname"
                                                placeholder="ชื่อ"
                                                className="block w-full px-4 py-2 mt-2 text-red-600 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                            <input
                                                type="text"
                                                name="lastname"
                                                placeholder="นามสกุล"
                                                className="block w-full px-4 py-2 mt-2 text-red-600 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                for="telephone"
                                                className="block text-sm font-semibold text-gray-800"
                                            >
                                                ที่อยู่
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                placeholder=" "
                                                className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                for="telephone"
                                                className="block text-sm font-semibold text-gray-800"
                                            >
                                                อำเภอ/เขต
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                placeholder="เมือง"
                                                className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                for="telephone"
                                                className="block text-sm font-semibold text-gray-800"
                                            >
                                                จังหวัด
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                placeholder="ขอนแก่น"
                                                className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                for="telephone"
                                                className="block text-sm font-semibold text-gray-800"
                                            >
                                                รหัสไปรษณีย์
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                placeholder=" "
                                                className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                for="telephone"
                                                className="block text-sm font-semibold text-gray-800"
                                            >
                                                เบอร์โทรศัพท์
                                            </label>
                                            <input
                                                type="text"
                                                name="tel"
                                                placeholder=""
                                                className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                        </div>
                                    </form>
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="checkout" className="flex-1 w-32 ">
                    การชำระเงิน
                    <div class="form-check">
                        <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault10"></input>
                        <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                            โอนเงิน
                        </label>
                        <div>
                            ธนาคารกสิกร
                            <p>ปรีชาพานิชย์ 043-3-77946-0</p>
                        </div>
                    </div>
                </div>
                <div id="checkout" className="flex-1 w-32 ">
                    ยืนยันการสั่งซื้อ
                </div>
            </div>
        </div>

    );
}
