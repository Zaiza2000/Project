
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Document, Page, Text, View, StyleSheet ,PDFDownloadLink } from '@react-pdf/renderer';
// lodash
import _ from "lodash";
//function
import {
  getRequisition,
  listRequisition,
  listRequisitionByRID,
} from "../../functions/requisition.js";

//page
import Invoice from "./Invoice.js";


export default function HistoryRequisition() {
  const [requisition, setRequisition] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {

    function get_has_run_status() {
      return !localStorage.getItem('hasRun');
    }
    
    const loadData = async() => {
      await listRequisitionByRID().then((res) => {
        setRequisition(res.data);
        console.log("res.data => ", res.data);
        console.log("requisition inner => ", requisition);
        res.data.map((item, index) => {
          loadListRIDData(item);
        });
      });
    };

    const loadListRIDData = async(item) => {
      let data =[];
      await getRequisition(item.RID).then((res) => {
        item.listOfRID = res.data;
        localStorage.setItem(item.RID, JSON.stringify(item.listOfRID))
        
        dispatch({
          type: "SET_REQUISITION"
        })
      });
    }

    async function get_loadData(){
      if (get_has_run_status()) {
        localStorage.setItem('hasRun', true);
        await loadData();
        setTimeout(function(){
          window.location.reload();
       }, 1000); // 1 seconds
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
                  RID
                </th>
                <th scope="col" class="px-6 py-3">
                  สินค้า
                </th>
                <th scope="col" class="px-6 py-3">
                  จำนวน
                </th>
                <th scope="col" class="px-6 py-3">
                  ราคาต้นทุน
                </th>
                {/* <th scope="col" class="px-6 py-3">
                  Action
                </th> */}
              </tr>
            </thead>
  )

  const tableData = (item) => {
    return JSON.parse(localStorage.getItem(item.RID)).map( (inner_item) => (
    <tbody>
      <tr class="bg-gray-200 border-b dark:bg-g00 dark:border-gray-700">
        <th
          scope="row"
          class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black"
        >
          {inner_item.RID}
        </th>
        <td class="px-6 py-4">{inner_item.product_name}</td>
        <td class="px-6 py-4">{inner_item.quantity}</td>
        <td class="px-6 py-4">{inner_item.price}</td>
        {/* <td class="px-6 py-4">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            พิมพ์ใบเบิก
          </button>
        </td> */}
      </tr>
    </tbody>
  ))}

  return (
    <div>
      <h1>HistoryRequisition</h1>
     
      
      {requisition.map((item, index) => (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-black dark:text-black">
            {tableHead}
            {tableData(item)}
          </table>
          <br></br>
        <div>
            <PDFDownloadLink 
            document={
              <Invoice requisition={item} />
            }
            fileName="invoice.pdf">
              PDF Download
            </PDFDownloadLink>
          </div>
          <br></br>
      
        </div>
      ))}
    </div>
  );
}
