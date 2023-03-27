import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import fontDev from "./THSarabun.ttf";
import React, { useState, useEffect } from "react";
import { get_order_detail_by_oid } from "../../functions/order_detail.js";
import { resolveOnChange } from "antd/es/input/Input";


// Register font
Font.register({ family: "THSarabun", src: fontDev });

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
  },
  section: {
    margin: 10,
    fontSize: 10,
  },

  //ใบเสร็จ
  header: {
    textAlign: "center",
    margin: 20,
    fontFamily: "THSarabun",
    fontSize: 23,
    textDecoration: "underline",
  },
  h1: {
    textAlign: "center",
    margin: 20,
    fontFamily: "THSarabun",
    fontSize: 16,

  },
  //หัวข้อ
  table: {
    display: "table",
    borderStyle: "solid",
    width: "auto",

    fontFamily: "THSarabun",
    fontSize: 15,
  },

  tableRow: {
    margin: "auto",
    flexDirection: "row",
    borderStyle: "solid",

    fontFamily: "THSarabun",
    fontSize: 13,
  },

  tableCol: {
    width: "10%",
    borderStyle: "solid",
    borderWidth: 0.5,

    fontFamily: "THSarabun",
    fontSize: 13,
  },

  tableCell: {
    margin: "auto",
    marginTop: 5,
    borderStyle: "solid",

    fontFamily: "THSarabun",
    fontSize: 13,
  },
});

export default function OrderPDF({ order_pdf, listorderUser, user }) {
  const [handle_repeat, set_handle_repeat] = useState(true);
  const [billing_address, set_billing_address] = useState([])

  useEffect(() => {
    get_order_detail_by_oid(user.id, order_pdf).then((res) => {
      set_billing_address(res.data)
    })
  }, [])

  // const Order_biller = () => {
  //   set_handle_repeat(false)
  //   console.log("billing_address: ", billing_address);
  //   billing_address.map((inner_item) => (
  //     <View classs="PDF">
  //       <View>
  //         <Text style={styles.Text}>{billing_address.billing_firstname}</Text>
  //       </View>
  //       <View>
  //         <Text style={styles.Text}>{billing_address.billing_lastname}</Text>
  //       </View>
  //     </View>
  //   ))
  // }

  const billingAddress = () => {
    return listorderUser.map((billing) => {
      if (billing.OID === order_pdf) {
        return (<View>
          <Text style={styles.h1}>{billing.billing_firstname}{billing.billing_lastname}</Text>
        </View>
        )
      }
    })
  }
  const OrderPDFData = () => {
    return listorderUser.map((inner_item) => {
      if (inner_item.OID === order_pdf) {
        return (

          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{inner_item.product_id}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{inner_item.product_name}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{inner_item.product_detail}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{inner_item.price}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{inner_item.quantity}</Text>
            </View>
          </View>

        );
      }
    }
    );
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>OID : {order_pdf}</Text>
        </View>

        <View style={styles.header}>
          <Text>ใบเสร็จ</Text>
        </View>
{/* 
        <View>
          {Order_biller()}
        </View> */}

        <View>
          {billingAddress()}
        </View>
        <View style={styles.header}>
          <Text>ที่อยู่ในการออกใบเสร็จ
            {/* {billingAddress.billing_firstname} */}
          </Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>รหัสสินค้า</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>สินค้า</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>รายละเอียด</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>ราคา</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>จำนวน</Text>
            </View>
          </View>
        </View>
        <View>{OrderPDFData()}</View>
      </Page>
    </Document>
  );
}