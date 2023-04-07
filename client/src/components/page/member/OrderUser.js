import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PDFDownloadLink } from '@react-pdf/renderer';

//function
import { Order_detail_join_Orders } from "../../functions/order_detail.js";


//page -> PDF
import OrderPDF from "./OrderPDF.js";
import VatPDF from "./VatPDF.js";
// import VatPDF from "./VatPDF";

export default function OrderUser() {
  const [orderUser, setOrderUser] = useState([]);
  const [listorderUser, setListOrderUser] = useState([]);
  const [handle_repeat, set_handle_repeat] = useState(true);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (handle_repeat) {
      set_handle_repeat(false)
      var list_OrderUser = [];

      // const value = JSON.parse(localStorage.getItem("value"))
      // console.log("value: ", value);
      Order_detail_join_Orders(user.id).then((res) => {
        var temp = res.data;
        setListOrderUser(res.data);

        for (let i = 0; i < temp.length; i++) {
          if (!list_OrderUser.includes(temp[i].OID)) {
            list_OrderUser.push(temp[i].OID);
            //   console.log(list_OrderUser);
          }
        }
        setOrderUser(list_OrderUser);


      });
    }

  }, []);

  const tableHead = (
    <thead className="text-xs text-black uppercase ">
      <tr>
        <th scope="col" className="px-6 py-3">
          OID
        </th>
        <th scope="col" className="px-6 py-3">
          รหัสลูกค้า
        </th>
        <th scope="col" className="px-6 py-3">
          สินค้า
        </th>
        <th scope="col" className="px-6 py-3">
          รายละเอียด
        </th>
        <th scope="col" className="px-6 py-3">
          จำนวน
        </th>
        <th scope="col" className="px-6 py-3">
          ราคา
        </th>
        <th scope="col" className="px-6 py-3">
          สถานะ
        </th>


      </tr>
    </thead>

  );
  const getTotal = (user_id, OID) => {
    const total_price = listorderUser.reduce((total_price, inner_item) => {
      if (inner_item.OID === OID) {
        // console.log("inner_item.price: ", (inner_item.price * inner_item.quantity), "\ninner_item.quantity: ", inner_item.quantity + "\ntotal:", total);
        return total_price + (inner_item.price * inner_item.quantity);
      } else {
        return total_price
      }
    }, 0)

    // console.log("Total price: ", total_price, "\nTotal price type: ", typeof total_price);
    console.log("====== END: getTotal(user_id, OID) ======");
    return total_price;
  };



  const tableData_user = (user_id, OID) => {
    return listorderUser.map((inner_item) => {
      // console.log("inner_item:", inner_item);
      if (inner_item.OID === OID) {
        return (
          <tbody>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-black whitespace-nowrap "
              >
                {inner_item.OID}
              </th>
              <td className="px-6 py-4">{inner_item.id}</td>
              <td className="px-6 py-4">{inner_item.product_name}</td>
              <td className="px-6 py-4">{inner_item.product_detail}</td>
              <td className="px-6 py-4">{inner_item.quantity}</td>
              <td className="px-6 py-4">{inner_item.price}</td>
              <td className="px-6 py-4">{inner_item.status}</td>
              <td className="px-6 py-4">{inner_item.total}</td>
            </tr>
          </tbody>
        );
      }
    });
  };

  console.log("orderUser: ", orderUser);

  return (
    <div className="">
      {/* <MenubarMember /> */}
      {/* <h1>Order User</h1> */}
      <div className="p-10">
        <h3 className="text-4xl font-bold text-purple-600">
          ประวัติการสั่งซื้อ
        </h3>
        {/* {orderUser} */}
        {/* {getAddressBilling()} */}

        {orderUser.map((OID) => (
          <div className="">
            <table className="w-full text-sm text-left text-black bg-blue-400 ">
              {tableHead}
              {tableData_user(user.id, OID)}
            </table>

            <div className="w-full   text-sm  text-black bg-blue-100 ">
              <div className="jutiify-between">ราคารวม {getTotal(user.id, OID)} บาท</div>
              {/* <div className="jutiify-between">หลักฐานการโอนเงิน {getPaymentPhoto(user.id, OID)} </div>
              <img src="file-1680064457430.jpg" /> */}
            </div>

            <div className="pt-6 pb-6">
              {/* <button className="bg-blue-200 hover:bg-gray-300 py-3 px-2 rounded-lg" >
                ดูใบสั่งซื้อ
              </button> */}
              <PDFDownloadLink

                className="bg-blue-200 hover:bg-gray-300 py-3 px-2 rounded-lg mr-2"
                document={
                  <OrderPDF order_pdf={OID} listorderUser={listorderUser} user={user} />
                }
                fileName="ใบสั่งซื้อ.pdf">
                <button >
                  ดาวน์โหลดใบสั่งซื้อ PDF
                </button>
              </PDFDownloadLink>

            </div>
            <div className="pt-6 pb-6">
              <PDFDownloadLink

                className="bg-blue-200 hover:bg-gray-300 py-3 px-2 rounded-lg"
                document={
                  <VatPDF order_pdf={OID} listorderUser={listorderUser} user={user}/>
                }
                fileName="ใบกำกับภาษี.pdf">
                <button >
                  ดาวน์โหลดใบกำกับภาษี PDF
                </button>
              </PDFDownloadLink>
            </div >

          </div>
        ))}
      </div>
    </div>
  );
}
