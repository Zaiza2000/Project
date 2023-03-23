
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
    <thead class="text-xs text-black uppercase bg-gray-50 dark:bg-red-700 dark:text-white">
              <tr>
                <th scope="col" class="px-6 py-3">
                  OID
                </th>
                <th scope="col" class="px-6 py-3">
                  รหัสลูกค้า
                </th>
                <th scope="col" class="px-6 py-3">
                  สินค้า
                </th>
                <th scope="col" class="px-6 py-3">
                  รายละเอียด
                </th>
                <th scope="col" class="px-6 py-3">
                  จำนวน
                </th>
                <th scope="col" class="px-6 py-3">
                  ราคาขาย
                </th>
            
                <th scope="col" class="px-6 py-3">
                  ราคาต้นทุน
                </th>
                
              </tr>
            </thead>
  )

  
  const tableData = (item) => {
    return JSON.parse(localStorage.getItem(item.OID)).map( (inner_item) => (
    <tbody>
      <tr class="bg-gray-200 border-b dark:bg-g00 dark:border-gray-700">
        <th
          scope="row"
          class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black"
        >
          {inner_item.OID}
        </th>
        <td class="px-6 py-4">{inner_item.id}</td>
        <td class="px-6 py-4">{inner_item.product_name}</td>
        <td class="px-6 py-4">{inner_item.product_detail}</td>
        <td class="px-6 py-4">{inner_item.quantity}</td>
        <td class="px-6 py-4">{inner_item.price}</td>
        <td class="px-6 py-4">{inner_item.cost}</td>

      </tr>
    </tbody>
   ))}

  
  return (
    <div>
      <h1>History Order</h1>
      <MenubarAdmin />
     
      
      {orderDetail.map((item, index) => (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-black dark:text-black">
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
  );
}
