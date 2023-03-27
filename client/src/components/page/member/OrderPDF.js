import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import fontDev from "./THSarabun.ttf";

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
    width: "18%",
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

export default function OrderPDF({ order_pdf, listorderUser }) {
  console.log("order_pdf >> PDF: ");
  console.log(order_pdf);

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
    });
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
