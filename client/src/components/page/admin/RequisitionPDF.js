import React, { useEffect, useState } from "react";
import { Document, Page, Text, View, StyleSheet ,PDFDownloadLink,Font } from '@react-pdf/renderer';
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




export default function RequisitionPDF({requisition}){
   


    return(
        <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text>Section #1 {requisition.RID}</Text>
                  <Text style={styles.header}> {requisition.product_name}</Text>
                </View>
                <View style={styles.section}>
                  <Text style={styles.header}>เมษิณี</Text>
                  <Text>Mesinee</Text>
                  <Text>tong</Text>
                </View>
              </Page>
            </Document>
    )
}