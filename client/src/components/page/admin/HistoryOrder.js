import React, { useEffect, useState } from "react";
import { Select } from "antd";


//function
import {
  listOrderDetailByOID,
  getOrderDetail,
} from "../../functions/order_detail.js";
import {
  changeStatus,
  Order_status,
  Order_status_by_OID
} from "../../functions/order.js";

//layout
import MenubarAdmin from "../../layouts/MenubarAdmin";

export default function HistoryOrder() {
  const [orderDetail, setOrderDetail] = useState([]);
  const [orderStatus, setOrderStatus] = useState({});
  const [orderImages, setOrderImages] = useState({});

  useEffect(() => {
    function get_has_run_status() {
      return !localStorage.getItem("hasRun");
    }

    const loadData = async () => {
      await listOrderDetailByOID().then((res) => {
        setOrderDetail(res.data);
        console.log("res.data => ", res.data);
        console.log("orderDetail inner => ", orderDetail);
        res.data.map((item, index) => {
          loadListOIDData(item);
        });
      });
    };

    const loadListOIDData = async (item) => {
      await getOrderDetail(item.OID).then((res) => {
        item.listOfOID = res.data;
        localStorage.setItem(item.OID, JSON.stringify(item.listOfOID));
      });


      // TODO: load order status
      Order_status_by_OID(item.OID).then((order) => {
        console.log("order order_status_by_OID => ", order.data.values().next().value);
        const order_status = order.data.values().next().value;

        orderStatus[order_status.OID] = order_status.status;

        orderImages[order_status.OID] = order_status.payment_photo.replace("../client/src", "../../..");

      
        const new_dict_status = {}
        Object.assign(new_dict_status, orderStatus)
        setOrderStatus(new_dict_status)
        console.log("+++++++ new_dict_status ==> " , new_dict_status);

        const new_dict_photo = {}
        Object.assign(new_dict_photo, orderImages)
        setOrderImages(new_dict_photo)
        console.log("********new_dict_photo ==> " , new_dict_photo);
      })
    };

    async function get_loadData() {
      if (get_has_run_status()) {
        localStorage.setItem("hasRun", true);
        await loadData();
        setTimeout(function () {
          window.location.reload();
        }, 3000); // 3 seconds
      } else {
        await loadData();
      }
    }
    show_log();
    get_loadData();

   
  }, []);

  // TODO: Logging datae time to console
  function show_log() {
    var m = new Date();
    var dateString =
      m.getFullYear() +
      "/" +
      ("0" + (m.getMonth() + 1)).slice(-2) +
      "/" +
      ("0" + m.getDate()).slice(-2) +
      " " +
      ("0" + m.getHours()).slice(-2) +
      ":" +
      ("0" + m.getMinutes()).slice(-2) +
      ":" +
      ("0" + m.getSeconds()).slice(-2);

    console.log(
      "\n".repeat(5) +
        "======".repeat(5) +
        `\t${dateString}\t` +
        "======".repeat(5) +
        "\n".repeat(5)
    );
  }

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
          ราคาขาย
        </th>
        <th scope="col" className="px-6 py-3">
          ราคาต้นทุน
        </th>
      </tr>
    </thead>
  );

  const tableData = (item) => {
    return JSON.parse(localStorage.getItem(item.OID)).map((inner_item) => (
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
          <td className="px-6 py-4">{inner_item.cost}</td>
          
        </tr>
      </tbody>
    ));
  };

  const roleData = ["รอการตรวจสอบ", "กำลังตรวจสอบข้อมูล", "กำลังจัดส่ง"];

  const load_roleData = (id, item) => {
    let values = {
      order_id: id,
    }
    
    console.log("item: ", id, item);

    // TODO: Get order object
    const order_status = Order_status(values)
    order_status.then((order) => {
      console.log("Order status", order.data.values().next().value.status);
      return order.data.values().next().value.status
    }).then((status) => {
      orderStatus[item.OID] = status;
      
      const new_dict = {}
      Object.assign(new_dict, orderStatus)
      setOrderStatus(new_dict)
    })
    
    return orderStatus[values.order_id];
  }

  const handleChangeStatus = (e, id, OID) => {
    let values = {
      order_id: id,
      status: e
    };

    orderStatus[OID] = e;
    const new_dict = {}
    Object.assign(new_dict, orderStatus)
    setOrderStatus(new_dict)

    changeStatus(values)
      .then((res) => {
        console.log("res.data =>", res.data);
        
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div className="flex flex-row">
      <MenubarAdmin />

      <div className="pr-16">
        <h3 className="text-4xl p-10 font-bold text-purple-600">
          ประวัติการสั่งซื้อของลูกค้า
        </h3>

        {orderDetail.map((item, index) => {
          return (
          <div className="">
            <table className="w-full text-sm text-left text-black bg-blue-400 ">
              {tableHead}
              {tableData(item)}
            </table>
            <br></br>
            
            {/* <p>{orderImages[item.OID]}</p> */}
            
            {/* <img src={orderImages[item.OID]} /> */}
            
            {/* <img src={require("../../../uploads/file-1680698025257.jpg")} /> */}
            {/* <img src="../../../uploads/file-1680698025257.jpg" /> */}


            {/* <img src={orderImages[item.OID] ? (orderImages[item.OID]) : orderImages[item.OID]}/> */}        

            {/* <img src={orderImages[item.OID] ? (orderImages[item.OID]) : '../../../uploads/file-1680698025257.jpg'} /> */}


            <div>
              <Select className="w-48"
                value={orderStatus[item.OID]}
                onChange={(e) => handleChangeStatus(e, item.listOfOID.values().next().value.order_id, item.OID)}
              >
                {roleData.map((item_option, index) => (
                  <Select.Option value={item_option} key={index}>
                    {item_option.status}
                  </Select.Option>
                ))}
              </Select>
            </div>
            <br></br>
            
          </div>
        )})}
      </div>
    </div>
  );
}
