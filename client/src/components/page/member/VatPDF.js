import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font,
    Image,
} from "@react-pdf/renderer";
import fontDev from "./THSarabun.ttf";
import React, { useState, useEffect } from "react";
import { get_order_detail_by_oid } from "../../functions/order_detail.js";



// Register font
Font.register({ family: "THSarabun", src: fontDev });

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 60,
        paddingRight: 60,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 74,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    headerContainer: {
        marginTop: 36,
        fontFamily: "THSarabun",
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
    invoiceNoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDate: {
        fontSize: 10,
        // fontStyle: 'bold',
    },
    label: {
        fontFamily: "THSarabun",
    },
    date: {
        script: 'AFDate_FormatEx("mm/dd/yy")'
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
        textAlign: "flex",
        margin: 20,
        fontFamily: "THSarabun",
        fontSize: 20,

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
        width: "20%",
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
    total: {
        width: '15%',
        textAlign: 'right',
        paddingRight: 8,
        fontFamily: "THSarabun",
    },
    titleContainer: {
        flexDirection: 'row',
        marginTop: 24,
        fontFamily: "THSarabun",
    },
    reportTitle: {
        letterSpacing: 4,
        fontSize: 25,
        textAlign: 'center',
        fontFamily: "THSarabun",
    }
});

export default function VatPDF({ order_pdf, listorderUser, user }) {
    const [billing_address, set_billing_address] = useState([])

    useEffect(() => {
        get_order_detail_by_oid(user.id, order_pdf).then((res) => {
            set_billing_address(res.data)
        })
    }, [])



    const billingAddress = () => {
        console.log("listorderUser: ", listorderUser.filter((inner_item) => inner_item.OID === order_pdf).slice(-1));
        const billing_address_one = listorderUser.filter((inner_item) => inner_item.OID === order_pdf).slice(-1)
        return billing_address_one.map((billing) => {
            return (
                <View>
                    <View>
                        <Text>ชื่อ: {billing.shipping_firstname} {billing.shipping_lastname}</Text>
                        <Text>ที่อยู่: {billing.shipping_address} {billing.shipping_sub_district}</Text>
                        <Text>{billing.shipping_district} {billing.shipping_province} {billing.shipping_zipcode} </Text>
                        <Text>เบอร์โทร: {billing.shipping_tel} </Text>
                        <Text>หมายเลขประจำตัวผู้เสียภาษี:  {billing.tax_id}</Text>
                    </View>

                    <View>
                        <Text>ชื่อผู้ชื้อ : {billing.billing_firstname} {billing.billing_lastname}</Text>
                        <Text>ที่อยู่: {billing.billing_address} {billing.billing_sub_district}</Text>
                        <Text>{billing.billing_district} {billing.billing_province} {billing.billing_zipcode} </Text>
                        <Text>เบอร์โทร: {billing.billing_tel} </Text>
                        <Text>หมายเลขประจำตัวผู้เสียภาษี: {billing.tax_id}</Text>
                    </View>
                </View>
            )
        })
    }
    const dateTime = () => {
        console.log("listorderUser: ", listorderUser.filter((inner_item) => inner_item.OID === order_pdf).slice(-1));
        const billing_address_one = listorderUser.filter((inner_item) => inner_item.OID === order_pdf).slice(-1)
        return billing_address_one.map((billing) => {
            return (
                <Text style={styles.date}>{billing.createdAt}</Text>
            )
        })
    }
    const getTotal = () => {
        const total_price = listorderUser.reduce((total_price, inner_item) => {
            if (inner_item.OID === order_pdf) {
                return total_price + (inner_item.price * inner_item.quantity);
            } else {
                console.log("total price: ", total_price)
                return total_price
            }

        }, 0)
        // console.log("====== END: getTotal(user_id, OID) ======");
        return total_price;
    };
    // const getVat = () => {
    //     const total_price = listorderUser.reduce((total_price, inner_item) => {
    //         if (inner_item.OID === order_pdf) {
    //             return total_price + (inner_item.price * inner_item.quantity);
    //         } else {
    //             console.log("total price: ", total_price)
    //             return total_price
    //         }

    //     }, 0)
    //     // console.log("====== END: getTotal(user_id, OID) ======");
    //     return total_price;
    // };
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
            <Page size="A4" style={styles.page}
            >
                <View style={styles.header}>
                    <Text style={styles.header}>ใบกำกับภาษี</Text>
                </View>
                <View style={styles.invoiceNoContainer}>
                    <Text style={styles.label}>เลขที่ใบเสร็จ : </Text>
                    <Text style={styles.invoiceDate}>{order_pdf}</Text>

                </View >
                <View style={styles.invoiceNoContainer}>
                    <Text style={styles.label}>วันที่ : </Text>
                    <Text style={styles.invoiceDate}>{dateTime()}</Text>
                </View >


                <View style={styles.headerContainer}>
                    {billingAddress()}
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
                <View style={styles.header}>
                    <Text>
                        ราคารวม {getTotal()}
                    </Text>
                </View>
                <View style={styles.h1}>
                    <Text>
                        ลงชื่อ........................................ผู้รับสินค้า {" "}{" "}{" "}
                        ลงชื่อ <Image style={styles.logo} src={"https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-6/271791862_4906494072748391_4394616534573215469_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cCtvlt3PX1YAX9reaWW&_nc_ht=scontent.fbkk18-2.fna&oh=00_AfDRlxZhIaNzRfbu0lqHMGy7iHqhnFvMwHvIf_v5K2WBOw&oe=64286505"} />
                        ผู้ขาย
                    </Text>
                </View>
            </Page>
        </Document>
    );
}