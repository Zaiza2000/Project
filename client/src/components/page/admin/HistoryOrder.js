
import React, { useEffect, useState } from "react";
// import { PDFDownloadLink,PDFPreview  } from '@react-pdf/renderer';

//function
import { listOrderDetail, listOrderDetailByOID,getOrderDetail } from "../../functions/order_detail.js";

//layout
import MenubarAdmin from "../../layouts/MenubarAdmin";




export default function HistoryOrder() {
  const [orderDetail, setOrderDetail] = useState([]);

  useEffect(() => {

    function get_has_run_status() {
      return !localStorage.getItem('hasRun');
    }
    
    const loadData = async() => {
      await listOrderDetailByOID().then((res) => {
        setOrderDetail(res.data);
        console.log("res.data => ", res.data);
        console.log("orderDetail inner => ", orderDetail);
        res.data.map((item, index) => {
          loadListOIDData(item);
        });
      });
    };

    const loadListOIDData = async(item) => {
     
      await getOrderDetail(item.OID).then((res) => {
        item.listOfOID = res.data;
        localStorage.setItem(item.OID, JSON.stringify(item.listOfOID))
        
      });
    }

    async function get_loadData(){
      if (get_has_run_status()) {
        localStorage.setItem('hasRun', true);
        await loadData();
        setTimeout(function(){
          window.location.reload();
       }, 3000); // 3 seconds
      } else {
        await loadData();
      }
    }

    //console.log("requisition => ", requisition);
    show_log();
    get_loadData();
  }, []);

  // TODO: Logging datae time to console
  function show_log() {
    var m = new Date();
    var dateString =
        m.getFullYear() + "/" +
        ("0" + (m.getMonth()+1)).slice(-2) + "/" +
        ("0" + m.getDate()).slice(-2) + " " +
        ("0" + m.getHours()).slice(-2) + ":" +
        ("0" + m.getMinutes()).slice(-2) + ":" +
        ("0" + m.getSeconds()).slice(-2);
    
    console.log("\n".repeat(5) + "======".repeat(5) + `\t${dateString}\t` + "======".repeat(5) + "\n".repeat(5));
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
  )

  
  const tableData = (item) => {
    return JSON.parse(localStorage.getItem(item.OID)).map( (inner_item) => (
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
        {/* <td className="px-6 py-4" > <img src={inner_item.payment_photo} alt=""/></td> */}
      </tr>
    </tbody>
   ))}

  
  return (
    <div className="flex flex-row">
      <MenubarAdmin />
     
      <div  className="pr-16">
       <h3 className="text-4xl p-10 font-bold text-purple-600">ประวัติการสั่งซื้อของลูกค้า</h3>

      {orderDetail.map((item, index) => (
        <div className="">
          <table className="w-full text-sm text-left text-black bg-blue-400 ">
            {tableHead}
            {tableData(item)}
          </table>
          <br></br>
        <div>
          
          
            {/* <PDFDownloadLink 
            document={
              <RequisitionPDF requisition_pdf={item} localStorage_items={JSON.parse(localStorage.getItem(item.RID))}/>
            }
            fileName="RequisitionPDF.pdf">
              PDF Download
            </PDFDownloadLink> */}
          </div>
          <br></br>
      
        </div>
      ))}
      </div>
    </div>
  );
}
