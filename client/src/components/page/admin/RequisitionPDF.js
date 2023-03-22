
import { Document, Page, Text, View, StyleSheet,Font } from '@react-pdf/renderer';
import fontDev from "./THSarabun.ttf"


  // Register font
Font.register({ family: 'THSarabun', src: fontDev });

const styles = StyleSheet.create({
    page: {
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      fontSize: 10,
    },

    //ใบเบิก
    header: {
      textAlign: 'center',
      margin: 20 ,
      fontFamily: 'THSarabun',
      fontSize: 23,
      textDecoration: 'underline',
    },
    //หัวข้อ
    table: {  
      display: "table", 
      borderStyle: "solid", 
      width: "auto", 
      
      fontFamily: 'THSarabun',
      fontSize: 15,
    },

    tableRow: { 
      margin: "auto", 
      flexDirection: "row" ,
      borderStyle: "solid", 

      fontFamily: 'THSarabun',
      fontSize: 13,
    }, 

    tableCol: { 
      width: "25%", 
      borderStyle: "solid", 
      borderWidth: 0.5, 
     
      fontFamily: 'THSarabun',
      fontSize: 13,
    }, 

    tableCell: { 
      margin: "auto", 
      marginTop: 5, 
      borderStyle: "solid", 

      fontFamily: 'THSarabun',
      fontSize: 13,
    }
  });




export default function RequisitionPDF({requisition_pdf, localStorage_items}){

  const listPDFData = () => {
    return localStorage_items.map( (inner_item) => (
      <View style={styles.tableRow}> 
        <View style={styles.tableCol}> 
          <Text style={styles.tableCell}>{inner_item.product_name}</Text> 
        </View> 
        <View style={styles.tableCol}> 
          <Text style={styles.tableCell}>{inner_item.price}</Text> 
        </View> 
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{inner_item.quantity}</Text> 
        </View>
      </View>
    ))}

    return(
        <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text>RID : {requisition_pdf.RID}</Text>
                </View>

                <View style={styles.header}>
                <Text >ใบเบิกสินค้า</Text>
                </View>

                <View style={styles.table}> 
                    <View style={styles.tableRow}> 
                      <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>สินค้า</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>ราคาต้นทุน</Text> 
                      </View> 
                      <View style={styles.tableCol}> 
                          <Text style={styles.tableCell}>จำนวน</Text> 
                      </View> 
                    </View>
       
                </View>
                <View>
                {listPDFData()}
                </View>
              
              </Page>
              
            </Document>
    )
}