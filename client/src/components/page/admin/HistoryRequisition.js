
import React, { useEffect, useState } from "react";
import { PDFDownloadLink, PDFPreview } from '@react-pdf/renderer';

//function
import {
  getRequisition,
  listRequisition,
  listRequisitionByRID,
} from "../../functions/requisition.js";

//layout
import MenubarAdmin from "../../layouts/MenubarAdmin";

//page -> PDF
import RequisitionPDF from "./RequisitionPDF.js";


export default function HistoryRequisition() {
  const [requisition, setRequisition] = useState([]);

  useEffect(() => {

    function get_has_run_status() {
      return !localStorage.getItem('hasRun');
    }

    const loadData = async () => {
      await listRequisitionByRID().then((res) => {
        setRequisition(res.data);
        console.log("res.data => ", res.data);
        console.log("requisition inner => ", requisition);
        res.data.map((item, index) => {
          loadListRIDData(item);
        });
      });
    };

    const loadListRIDData = async (item) => {

      await getRequisition(item.RID).then((res) => {
        item.listOfRID = res.data;
        localStorage.setItem(item.RID, JSON.stringify(item.listOfRID))

      });
    }

    async function get_loadData() {
      if (get_has_run_status()) {
        localStorage.setItem('hasRun', true);
        await loadData();
        setTimeout(function () {
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
      ("0" + (m.getMonth() + 1)).slice(-2) + "/" +
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
          RID
        </th>
        <th scope="col" className="px-6 py-3">
          รหัสสินค้า
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
          ราคาต้นทุน
        </th>

      </tr>
    </thead>
  )

  const tableData = (item) => {
    return JSON.parse(localStorage.getItem(item.RID)).map((inner_item) => (
      <tbody>
        <tr className="bg-white border-b ">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-black whitespace-nowrap "
          >
            {inner_item.RID}
          </th>
          <td className="px-6 py-4">{inner_item.product_id}</td>
          <td className="px-6 py-4">{inner_item.product_name}</td>
          <td className="px-6 py-4">{inner_item.product_detail}</td>
          <td className="px-6 py-4">{inner_item.quantity}</td>
          <td className="px-6 py-4">{inner_item.price}</td>

        </tr>
      </tbody>
    ))
  }

  return (
    <div className="flex flex-row">
      <MenubarAdmin />

      <div className="pr-16">
        <h3 className="text-4xl p-10 font-bold text-purple-600">ประวัติการเบิกสินค้า</h3>

        {requisition.map((item, index) => (
          <div className="">
            <table className="w-full text-sm text-left text-black bg-blue-400  ">
              {tableHead}
              {tableData(item)}
            </table>
            <br></br>
            <div >
              <PDFDownloadLink

                className="bg-blue-200 hover:bg-gray-300 py-3 px-2 rounded-lg"
                document={
                  <RequisitionPDF requisition_pdf={item} localStorage_items={JSON.parse(localStorage.getItem(item.RID))}
                  />

                }
                fileName="RequisitionPDF.pdf">
                <button >
                  ดาวน์โหลดข้อมูลเป็น PDF
                </button>

              </PDFDownloadLink>

            </div>
            <br></br>

          </div>
        ))}
      </div>
    </div>
  );
}
