import React, { useEffect, useState } from "react";
import { Document, Page, Text, View, StyleSheet ,PDFDownloadLink,Font } from '@react-pdf/renderer';
import fontDev from "./angsana.ttc"

  // Register font
Font.register({ family: 'Roboto', src: fontDev });

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
    title: {fontFamily: 'Roboto',
    
  }
  });




export default function RequisitionPDF({requisition}){
   


    return(
        <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text>Section #1 {requisition.RID}</Text>
                </View>
                <View style={styles.section}>
                  <Text>เมษิณี</Text>
                  <Text>Mesinee</Text>
                  <Text>tong</Text>
                </View>
              </Page>
            </Document>
    )
}