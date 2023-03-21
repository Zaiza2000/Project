import React, { useEffect, useState } from "react";
import { Document, Page, Text, View, StyleSheet ,PDFDownloadLink } from '@react-pdf/renderer';
//function
import {
  getRequisition,
  listRequisition,
  listRequisitionByRID,
} from "../../functions/requisition.js";

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

export default function Invoice({requisition}){
   


    return(
        <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text>Section #1 {requisition.RID}</Text>
                </View>
                <View style={styles.section}>
                  <Text>Section #2</Text>
                </View>
              </Page>
            </Document>
    )
}