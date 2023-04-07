import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

// import img2 from "../../uploads/file-1678978441539.jpg";

//function
import { userCart, CartUpdateToProduct } from "../functions/user";
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
  const [createStatus, setCreateStatus] = useState(true);
  // const [order_id_state, set_order_id_state] = useState([])

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
    status: "รอการตรวจสอบ",
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
      shipping_zipcode: filterDistrict[0].zip_code,
    });
  };
  const onChangeSubDistrict_billing = (e) => {
    const filterDistrict = sub_district_billing.filter((item) => {
      return e.target.value === item.id;
    });
    setValue({
      ...value,
      [e.target.name]: filterDistrict[0].name_th,
      billing_zipcode: filterDistrict[0].zip_code,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      if (createStatus) {
        console.log("Create Status: ", createStatus);
        setCreateStatus(false);
        console.log("================ Starting ================");
        const authtoken = user.token;

        function cart_with_orderID(item) {
          console.log("cart - Checkout.js:", item);
          Object.keys(item).forEach((key) => {
              console.log(
                "Check Order ID State: ",
                parseInt(localStorage.getItem("order_id"))
              );
              item[key].order_id = parseInt(localStorage.getItem("order_id"));
          });
          console.log("cart after - Checkout.js:", item);
          return item;
        };

        // TODO: LocalStorage get order_id

        if (window.confirm("ยืนยันการสั่งซื้อ ?")) {

        CreateOrder(authtoken, value)
          .then((response) => {
              return response.data.order_id})
          .then((order_id) => {
              var new_cart;
              localStorage.setItem("order_id", order_id);
              console.log("localStorage.getItem('order_id'): ", localStorage.getItem("order_id"))
              new_cart = cart_with_orderID(cart);
              return new_cart})
          .then((new_cart) => {
              console.log("localStorage.getItem('order_id'): ", localStorage.getItem("order_id"))
              userCart(authtoken, new_cart)
              return new_cart})
          .then((new_cart) => {
              CartUpdateToProduct(authtoken, new_cart)
                .then((res) => {
                  console.log("Successfully: ", res);
                  navigate("/OrderUser");
                })
              .catch((error) => {
                console.log(error.response.data);
                alert(error.response.data);
              });
          })
        }
        
          
          
          
          
        console.log("================ END ================");
      }
    
  };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!value.shipping_firstname) {
  //     alert("กรุณากรอกชื่อ");
  //   } else if (!value.shipping_lastname) {
  //     alert("กรุณากรอกนามสกุล");
  //   } else if (!value.shipping_address) {
  //     alert("กรุณากรอกที่อยู่จัดส่ง");
  //   } else if (!value.shipping_province) {
  //     alert("กรุณากรอกจังหวัดที่อยู่จัดส่ง");
  //   } else if (!value.shipping_district) {
  //     alert("กรุณากรอกอำเภอที่อยู่จัดส่ง");
  //   } else if (!value.shipping_sub_district) {
  //     alert("กรุณากรอกตำบลที่อยู่จัดส่ง");
  //   } else if (!value.shipping_tel) {
  //     alert("กรุณากรอกเบอร์โทร");
  //   } else {
  //     if (createStatus) {
  //       console.log("Create Status: ", createStatus);
  //       setCreateStatus(false);
  //       console.log("================ Starting ================");
  //       const authtoken = user.token;

  //       function cart_with_orderID(item) {
  //         console.log("cart - Checkout.js:", item);
  //         Object.keys(item).forEach((key) => {
  //             console.log(
  //               "Check Order ID State: ",
  //               parseInt(localStorage.getItem("order_id"))
  //             );
  //             item[key].order_id = parseInt(localStorage.getItem("order_id"));
  //         });
  //         console.log("cart after - Checkout.js:", item);
  //         return item;
  //       };

  //       // TODO: LocalStorage get order_id
  //       // if (window.confirm("ยืนยันการสั่งซื้อ ?")) {
          
  //       CreateOrder(authtoken, value)
  //         .then((response) => {
  //             return response.data.order_id})
  //         .then((order_id) => {
  //             var new_cart;
  //             localStorage.setItem("order_id", order_id);
  //             console.log("localStorage.getItem('order_id'): ", localStorage.getItem("order_id"))
  //             new_cart = cart_with_orderID(cart);
  //             return new_cart})
  //         .then((new_cart) => {
  //             console.log("localStorage.getItem('order_id'): ", localStorage.getItem("order_id"))
  //             userCart(authtoken, new_cart)
  //             return new_cart})
  //         .then((new_cart) => {
  //             CartUpdateToProduct(authtoken, new_cart)
  //               .then((res) => {
  //                 console.log("Successfully: ", res);
  //                 navigate("/OrderUser");
  //               })
  //             .catch((error) => {
  //               console.log(error.response.data);
  //               alert(error.response.data);
  //             });
  //         })
          
          
          
  //         // }
  //       console.log("================ END ================");
  //     }
  //   }
  // };

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> order_detail <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
  const getTotal = () => {
    return cart.reduce((currenValue, nextValue) => {
      return currenValue + nextValue.count * nextValue.product_sale;
    }, 0);
  };

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Update Address Infomation
  // TODO: Now
  const update_address = () => {
    console.log("Use same address !");
    console.log(user);
    console.log(value);

    value["shipping_firstname"] = user.firstname;
    value["shipping_lastname"] = user.lastname;
    value["shipping_address"] = user.address;
    value["shipping_sub_district"] = user.sub_district;
    value["shipping_district"] = user.district;
    value["shipping_province"] = user.province;
    value["shipping_zipcode"] = user.zipcode;
    value["shipping_tel"] = user.tel;

    console.log("After upadte address !");
    console.log(value);
  };

  const reset_address = () => {
    setValue({
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
      status: "รอการตรวจสอบ",
      id: null,
    });

    setDistrict_shipping([]);
    setSubDistrict_shipping([]);
  };

  const selected_option = (item, index, option) => {
    if (item.name_th === option["saved_data"]) {
      // if (option["function"]) { option["function"](item.id) }
      return (
        <option key={index} value={item.id} selected>
          {item.name_th}
        </option>
      );
    } else {
      return (
        <option key={index} value={item.id}>
          {item.name_th}
        </option>
      );
    }
  };

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Update List Options
  const onChangeProvince_shipping_selected = (province_id) => {
    // console.log("onChangeProvince_shipping_selected: Done");
    listDistrict(province_id).then((res) => {
      setDistrict_shipping(res.data);
    });
  };

  const onChangeDistrict_shipping_selected = (district_id) => {
    // console.log("onChangeDistrict_shipping_selected: Done");
    listSubDistrict(district_id).then((res) => {
      setSubDistrict_shipping(res.data);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-4xl font-extrabold sm:text-4xl m-20 ">
        สั่งซื้อสินค้า
      </h1>

      <div className="flex space-x-10 m-20">
        {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   Shipping   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/}

        <div id="checkout" className="flex-1 w-64 ">
          ที่อยู่สำหรับจัดส่งสินค้า
          <div className="form-check">
            <label className="form-check text-gray-800" >
              <div>
                <input
                  type="radio"
                  value="address_old"
                  name="address"
                  onClick={() => {
                    // TODO: Edit Radio
                    update_address();

                    var temp_province_id;
                    province_shipping.map((item) => {
                      if (item.name_th === value.shipping_province) {
                        temp_province_id = item.id;
                      }
                    });
                    onChangeProvince_shipping_selected(temp_province_id);
                    // console.log("temp_province_id", temp_province_id)

                    var temp_district_id;
                    district_shipping.map((item) => {
                      if (item.name_th === value.shipping_district) {
                        temp_district_id = item.id;
                      }
                    });
                    onChangeDistrict_shipping_selected(temp_district_id);
                    // console.log("temp_dictrict_id", temp_district_id)

                    console.log("Provice state", province_shipping);
                    console.log("District state", district_shipping);
                    console.log("Subdistrict state", sub_district_shipping);
                  }}
                />
                ใช้ที่อยู่ที่ลงทะเบียน
                <h3>
                  ชื่อ: {user.firstname} {user.lastname}
                </h3>
                <h3>
                  ที่อยู่: {user.address} {user.sub_district} {user.district}{" "}
                  {user.province} {user.zipcode}
                </h3>
                <h3>เบอร์โทร {user.tel}</h3>
              </div>
              <input
                type="radio"
                value="address_new"
                name="address"
                onClick={reset_address}
              />
              ใช้ที่อยู่ใหม่
              <div className="mt-6">
                <div className="mb-2">
                  <label
                    
                    className="block  font-semibold text-gray-800"
                  >
                    ชื่อ
                  </label>
                  <input
                  required
                    type="text"
                    name="shipping_firstname"
                    placeholder="ชื่อ"
                    onChange={(e) => handleChange(e)}
                    value={value.shipping_firstname} // TODO: Copy This Code to another
                    className="block  w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <input
                  required
                    type="text"
                    name="shipping_lastname"
                    placeholder="นามสกุล"
                    onChange={(e) => handleChange(e)}
                    value={value.shipping_lastname}
                    className="block  w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mb-2">
                  <label className="block  font-semibold text-gray-800">
                    ที่อยู่
                  </label>
                  <textarea
                  required
                    type="text"
                    name="shipping_address"
                    placeholder="เลขที่ 85/8 หมู่ 13 "
                    onChange={(e) => handleChange(e)}
                    value={value.shipping_address}
                    className="block  w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="-mx-3 mb-2">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block  font-semibold text-gray-800">
                      จังหวัด
                    </label>
                    <select
                    required
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      name="shipping_province"
                      onChange={(e) => {
                        if (!value.shipping_province) {
                          onChangeProvince_shipping(e);
                        }
                      }}
                    >
                      {province_shipping.map((item, index) =>
                        selected_option(item, index, {
                          saved_data: value.shipping_province,
                          function: onChangeProvince_shipping_selected,
                        })
                      )}
                    </select>
                  </div>
                </div>
                <div className=" -mx-3 mb-2">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block  font-semibold text-gray-800"
                      
                    >
                      อำเภอ
                    </label>
                    <select
                    required
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      name="shipping_district"
                      onChange={(e) => onChangeDistrict_shipping(e)}
                    >
                      {district_shipping.map((item, index) =>
                        selected_option(item, index, {
                          saved_data: value.shipping_district,
                          function: onChangeDistrict_shipping_selected,
                        })
                      )}
                    </select>
                  </div>
                </div>

                <div className="-mx-3 mb-2">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block  font-semibold text-gray-800"
                      
                    >
                      ตำบล
                    </label>
                    <select
                    required
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      name="shipping_sub_district"
                      onChange={(e) => onChangeSubDistrict_shipping(e)}
                    >
                      {sub_district_shipping.map((item, index) =>
                        selected_option(item, index, {
                          saved_data: value.shipping_sub_district,
                        })
                      )}
                    </select>
                  </div>
                </div>
                <div className="-mx-3 mb-2">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block font-semibold text-gray-800" >
                      รหัสไปรษณีย์
                    </label>
                    <input
                    required
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      id="grid-zip"
                      type="text"
                      name="shipping_zipcode"
                      value={value.shipping_zipcode}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label
                    
                    className="block font-semibold text-gray-800"
                  >
                    เบอร์โทรศัพท์
                  </label>
                  <input
                  required
                    type="text"
                    name="shipping_tel"
                    maxLength="10"
                    pattern="[0-9]*"
                    placeholder="098-888-8888"
                    onChange={(e) => handleChange(e)}
                    value={value.shipping_tel}
                    className="block  w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                
              </div>
            </label>
          </div>
        </div>
        {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   Billing   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,<<<<<<<<<<<<<<<<<<*/}
        <div id="checkout" className="flex-1 w-64 ">
          ที่อยู่ในการออกใบเสร็จ
          <label  className="block font-semibold text-gray-800">
            <p className="text-xs text-gray-600">**ไม่ระบุก็ได้**</p>
          </label>
          
          <div className="form-check">
            <label className="form-check-label  text-gray-800">
              <div className="mt-6">
                <div className="mb-2">
                  <label
                    
                    className="block  font-semibold text-gray-800"
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
                  <label  className="block  font-semibold text-gray-800">
                    ที่อยู่
                  </label>
                  <textarea
                    type="text"
                    name="billing_address"
                    placeholder="บริษัท เคลย์ จำกัด เลขที่ 8/8 หมู่ 8"
                    onChange={(e) => handleChange(e)}
                    className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="-mx-3 mb-2">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block font-semibold text-gray-800" >
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
                    <label className="block font-semibold text-gray-800" >
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
                    <label className="block font-semibold text-gray-800" >
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
                      className="block  font-semibold text-gray-800"
                     
                    >
                      รหัสไปรษณีย์
                    </label>
                    <input
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      type="text"
                      name="billing_zipcode"
                      value={value.billing_zipcode}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label
                   
                    className="block  font-semibold text-gray-800"
                  >
                    เบอร์โทรศัพท์
                  </label>
                  <input
                    type="text"
                    name="billing_tel"
                    maxLength="10"
                    pattern="[0-9]*"
                    placeholder="098-888-8888"
                    onChange={(e) => handleChange(e)}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>
            </label>
          </div>
        </div>

        <div id="checkout" className="flex-1 w-64 ">
          การชำระเงิน
          <div>
            <div className="form-check">
              <label
                className="form-check-label inline-block font-semibold text-gray-700"
                
              >
                ลูกค้าต้องทำการโอนเงิน พร้อมอัปโหลดรูปภาพหลักฐานการโอนเงิน
              </label>
              <div className="border-t border-gray-100 mt-10">
                ธนาคารกสิกร
                <p>ปรีชาพานิชย์ 043-3-77946-0</p>
              </div>
              <div>
                <img src={"https://scontent.fbkk18-2.fna.fbcdn.net/v/t1.15752-9/334910878_930587868361066_8570669306536249133_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=yo_N1wMtqskAX-B7Dkd&_nc_ht=scontent.fbkk18-2.fna&oh=03_AdTZbk2f_r3sYtBaav9RWSilftM8pA7aVZg9GCWjFrXk_w&oe=644A8F15"} />
                <input
                required
                  id="photo"
                  type="file"
                  name="file"
                  className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none "
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  
                  htmlFor="customfile"
                >
                  {filename}
                </label>
            
              </div>

              <div className="mt-15">
                <label className="block font-semibold text-gray-800">
                  หมายเลขประจำตัวผู้เสียภาษี
                  <p className="text-xs text-gray-600">**ไม่ระบุก็ได้**</p>
                </label>
                <input
                  type="text"
                  name="tax_id"
                  maxLength="13"
                  pattern="[0-9]*"
                  placeholder="1234567890111"
                  onChange={(e) => handleChange(e)}
                  className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-red-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="checkout" className="flex-1 w-64 ">
          ยืนยันการสั่งซื้อ
          <div className="flex justify-center pt-8  border-t border-gray-100">
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
    </form>
  );
}
