
import { Document, Page, Text, View, StyleSheet,Font } from '@react-pdf/renderer';
import fontDev from "./THSarabun.ttf"


  // Register font
Font.register({ family: 'THSarabun', src: fontDev });

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    header: {
    fontFamily: 'THSarabun',
    fontSize: 12,
    },
  });




export default function RequisitionPDF({requisition_pdf, localStorage_items}){

  const listPDFData = () => {
    return localStorage_items.map( (inner_item) => (
        <Text style={styles.header}>{inner_item.product_name}    {inner_item.quantity}   {inner_item.price}</Text>
  
    ))}

    return(
        <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text>Section #1 {requisition_pdf.RID}</Text>
                  
                </View>
                <View style={styles.section}>
                  {listPDFData()}
                </View>
              </Page>
              
            </Document>
    )
}