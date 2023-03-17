import React, { useState, useEffect } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { Radio } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";

// import img2 from "../../uploads/file-1678978441539.jpg";

//function
import { CreateOrder } from "../functions/order";
import {
  listProvince,
  listDistrict,
  listSubDistrict,
} from "../functions/location";

export default function CheckOut() {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const [province_shipping, setProvince_shipping] = useState([]);
  const [district_shipping, setDistrict_shipping] = useState([]);
  const [sub_district_shipping, setSubDistrict_shipping] = useState([]);
  const [zipcode_shipping, setZipcode_shipping] = useState([]);
  const [province_billing, setProvince_billing] = useState([]);
  const [district_billing, setDistrict_billing] = useState([]);
  const [sub_district_billing, setSubDistrict_billing] = useState([]);
  const [zipcode_billing, setZipcode_billing] = useState([]);
  const [file, setFile] = useState([]);
  const [filename, setfilename] = useState("Choose File");
  const navigate = useNavigate();

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> order <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
  const [value, setValue] = useState({
    shipping_firstname: "",
    shipping_lastname: "",
    shipping_tel: "",
    shipping_address: "",
    shipping_sub_district: "",
    shipping_district: "",
    shipping_province: "",
    shipping_zipcode: "",
    billing_firstname: "",
    billing_lastname: "",
    billing_tel: "",
    billing_address: "",
    billing_sub_district: "",
    billing_district: "",
    billing_province: "",
    billing_zipcode: "",
    tax_id: "",
    payment_photo: "",
    id: null,
  });

  useEffect(() => {
    //code
    loadData();
  }, []);

  const handleChange = (e) => {
    console.log(e.target.name);
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  //Locations
  const loadData = () => {
    listProvince()
      .then((res) => {
        setProvince_shipping(res.data);
        setProvince_billing(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const onChangeProvince_shipping = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let lable = e.nativeEvent.target[index].text;
    setValue({
      ...value,
      [e.target.name]: lable,
    });

    listDistrict(e.target.value)
      .then((res) => {
        setDistrict_shipping(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const onChangeProvince_billing = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let lable = e.nativeEvent.target[index].text;
    setValue({
      ...value,
      [e.target.name]: lable,
    });

    listDistrict(e.target.value)
      .then((res) => {
        setDistrict_billing(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const onChangeDistrict_shipping = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let lable = e.nativeEvent.target[index].text;
    setValue({
      ...value,
      [e.target.name]: lable,
    });

    listSubDistrict(e.target.value)
      .then((res) => {
        setSubDistrict_shipping(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const onChangeDistrict_billing = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let lable = e.nativeEvent.target[index].text;
    setValue({
      ...value,
      [e.target.name]: lable,
    });

    listSubDistrict(e.target.value)
      .then((res) => {
        setSubDistrict_billing(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const onChangeSubDistrict_shipping = (e) => {
    const filterDistrict = sub_district_shipping.filter((item) => {
      return e.target.value === item.id;
    });

    setValue({
      ...value,
      [e.target.name]: filterDistrict[0].name_th,
      zipcode_shipping: filterDistrict[0].zip_code,
    });
  };
  const onChangeSubDistrict_billing = (e) => {
    const filterDistrict = sub_district_billing.filter((item) => {
      return e.target.value === item.id;
    });
    setValue({
      ...value,
      [e.target.name]: filterDistrict[0].name_th,
      zipcode_billing: filterDistrict[0].zip_code,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.shipping_firstname) {
      alert("กรุณากรอกชื่อ");
    } else if (!value.shipping_lastname) {
      alert("กรุณากรอกนามสกุล");
    } else if (!value.shipping_address) {
      alert("กรุณากรอกที่อยู่จัดส่ง");
    } else if (!value.shipping_province) {
      alert("กรุณากรอกจังหวัดที่อยู่จัดส่ง");
    } else if (!value.shipping_district) {
      alert("กรุณากรอกอำเภอที่อยู่จัดส่ง");
    } else if (!value.shipping_sub_district) {
      alert("กรุณากรอกตำบลที่อยู่จัดส่ง");
    } else if (!value.shipping_tel) {
      alert("กรุณากรอกเบอร์โทร");
    } else {
      const authtoken = user.token;
      CreateOrder(authtoken, value)
        .then((res) => {
          console.log(res.data);
          alert("CreateOrder Successful");
        })

        .catch((error) => {
          console.log(error.response.data);
          alert(error.response.data);
        });
    }
  };

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> order_detail <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
  const getTotal = () => {
    return cart.reduce((currenValue, nextValue) => {
      return currenValue + nextValue.count * nextValue.product_sale;
    }, 0);
  };

  return (
    <div>
      <h1 className="text-4xl font-extrabold sm:text-6xl m-20 ">
        สั่งซื้อสินค้า
      </h1>
      {/* <h2>{user.firstname}</h2>
      <h2>{user.lastname}</h2>
      <h2>{user.address}</h2>
      <h2>{user.sub_district}</h2>
      <h2>{user.district}</h2>
      <h2>{user.province}</h2>
      <h2>{user.zipcode}</h2>
      <h2>{user.tel}</h2> */}
      <div className="flex space-x-10 m-20">
        {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   Shipping   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/}

        <div id="checkout" className="flex-1 w-64 ">
          ที่อยู่สำหรับจัดส่งสินค้า
          <div className="form-check">
            <label className="form-check text-gray-800" for="flexRadioDefault2">
              {/* ใช้ที่อยู่ใหม่ */}
              <form className="mt-6" onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label
                    for="text"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    ชื่อ
                  </label>
                  <input
                    type="text"
                    name="shipping_firstname"
                    placeholder="ชื่อ"
                    onChange={(e) => handleChange(e)}
                    className="block  w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <input
                    type="text"
                    name="shipping_lastname"
                    placeholder="นามสกุล"
                    onChange={(e) => handleChange(e)}
                    className="block  w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-semibold text-gray-800">
                    ที่อยู่
                  </label>
                  <textarea
                    type="text"
                    name="shipping_address"
                    placeholder="เลขที่ 85/8 หมู่ 13 ต.ในเมือง "
                    onChange={(e) => handleChange(e)}
                    className="block  w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="-mx-3 mb-2">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block text-sm font-semibold text-gray-800">
                      จังหวัด
                    </label>
                    <select
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      name="shipping_province"
                      onChange={(e) => onChangeProvince_shipping(e)}
                    >
                      {province_shipping.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.name_th}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className=" -mx-3 mb-2">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block text-sm font-semibold text-gray-800"
                      for=""
                    >
                      อำเภอ
                    </label>
                    <select
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      name="shipping_district"
                      onChange={(e) => onChangeDistrict_shipping(e)}
                    >
                      {district_shipping.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.name_th}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="-mx-3 mb-2">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block text-sm font-semibold text-gray-800"
                      for=""
                    >
                      ตำบล
                    </label>
                    <select
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      name="shipping_sub_district"
                      onChange={(e) => onChangeSubDistrict_shipping(e)}
                    >
                      {sub_district_shipping.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.name_th}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="-mx-3 mb-2">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block text-sm font-semibold text-gray-800"
                      for=""
                    >
                      รหัสไปรษณีย์
                    </label>
                    <input
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      id="grid-zip"
                      type="text"
                      name="shipping_zipcode"
                      value={value.zipcode_shipping}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
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
                    name="shipping_tel"
                    placeholder="098-888-8888"
                    onChange={(e) => handleChange(e)}
                    className="block  w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-6">
                  <button className="w-full px-4 py-2 mt-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-purple-600">
                    ยืนยันข้อมูล
                  </button>
                </div>
              </form>
            </label>
          </div>
        </div>
        {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   Billing   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,<<<<<<<<<<<<<<<<<<*/}
        <div id="checkout" className="flex-1 w-64 ">
          ที่อยู่ในการออกใบเสร็จ

          {/* <div className="form-check ">
            <label
              className="form-check-label inline-block text-gray-800"
              for="flexRadioDefault1"
            >
               ใช้ที่อยู่เดียวกับที่อยู่ในการจัดส่ง 
            </label>
          </div> */}
          <div className="form-check">
            <label
              className="form-check-label text-gray-800"
              for="flexRadioDefault2"
            >
              {/* ใช้ที่อยู่ใหม่ */}
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
                    name="billing_firstname"
                    placeholder="ชื่อ"
                    onChange={(e) => handleChange(e)}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <input
                    type="text"
                    name="billing_lastname"
                    placeholder="นามสกุล"
                    onChange={(e) => handleChange(e)}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mb-2">
                  <label
                    for=""
                    className="block text-sm font-semibold text-gray-800"
                  >
                    ที่อยู่
                  </label>
                  <textarea
                    type="text"
                    name="billing_address"
                    placeholder="บริษัท เคลย์ จำกัด เลขที่ 8/8 หมู่ 8 ต.ในเมือง"
                    onChange={(e) => handleChange(e)}
                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="-mx-3 mb-2">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block text-sm font-semibold text-gray-800"
                      for=""
                    >
                      จังหวัด
                    </label>
                    <select
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      name="billing_province"
                      onChange={(e) => onChangeProvince_billing(e)}
                    >
                      {province_billing.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.name_th}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="-mx-3 mb-2">
                  <div className="w-full  px-3 mb-6 md:mb-0">
                    <label
                      className="block text-sm font-semibold text-gray-800"
                      for=""
                    >
                      อำเภอ
                    </label>
                    <select
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      name="billing_district"
                      onChange={(e) => onChangeDistrict_billing(e)}
                    >
                      {district_billing.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.name_th}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="-mx-3 mb-2">
                  <div className="w-full  px-3 mb-6 md:mb-0">
                    <label
                      className="block text-sm font-semibold text-gray-800"
                      for=""
                    >
                      ตำบล
                    </label>
                    <select
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      name="billing_sub_district"
                      onChange={(e) => onChangeSubDistrict_billing(e)}
                    >
                      {sub_district_billing.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.name_th}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="-mx-3 mb-2">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block text-sm font-semibold text-gray-800"
                      for=""
                    >
                      รหัสไปรษณีย์
                    </label>
                    <input
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      id="grid-zip"
                      type="text"
                      name="billing_zipcode"
                      value={value.zipcode_billing}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
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
                    name="billing_tel"
                    placeholder="098-888-8888"
                    onChange={(e) => handleChange(e)}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </form>
            </label>
          </div>
        </div>
        
        <div id="checkout" className="flex-1 w-64 ">
          การชำระเงิน
          <form>
            <div className="form-check">
              <label
                className="form-check-label inline-block text-gray-800"
                for="flexRadioDefault1"
              >
                ลูกค้าต้องการโอนเงิน พร้อมอัปโหลดรูปภาพหลักฐานการโอนเงิน
              </label>
              <div>
                ธนาคารกสิกร
                <p>ปรีชาพานิชย์ 043-3-77946-0</p>
              </div>

              <div>
                {/* <img src={require("../../uploads/file-1678978441539.jpg")} /> */}
                <input
                  id="photo"
                  type="file"
                  name="file"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
                <lable htmlFor="customfile">{filename}</lable>
              </div>

              <div className="">
                <label
                  for="text"
                  className="block text-sm font-semibold text-gray-800"
                >
                  หมายเลขประจำตัวผู้เสียภาษี
                </label>
                <input
                  type="text"
                  name="tax_id"
                  placeholder="1234567890111"
                  onChange={(e) => handleChange(e)}
                  className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
          </form>
        </div>


        <div id="checkout" className="flex-1 w-64 ">
          ยืนยันการสั่งซื้อ
          <div className="flex justify-center pt-8 mt-8 border-t border-gray-100">
            <div className="w-screen max-w-lg space-y-4 ">
              <dl className="space-y-0.5 text-sm text-gray-700 ">
                <div className="flex justify-between !text-base font-extrabold text-left">
                  <dt>รายการสินค้า</dt>
                  <dd>ราคา</dd>
                </div>

                <div className="flex justify-between ">
                  <dt>
                    {cart.map((item, index) => (
                      <div key={index} className="text-left">
                        {item.product_name} x {item.count}
                      </div>
                    ))}
                  </dt>
                  <dd>
                    {cart.map((item, index) => (
                      <div key={index}>{item.product_sale * item.count}</div>
                    ))}
                  </dd>
                </div>
                <hr />
                <div className="flex justify-between !text-base font-medium">
                  <dt>รวม</dt>
                  <dd>{getTotal()}</dd>
                </div>
              </dl>
            </div>
            
          </div>
          <div className="mt-6">
                  <button className="w-full px-4 py-2 mt-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-purple-600">
                    ยืนยัน
                  </button>
                </div>
        </div>
        
      </div>
    </div>
  );
}
