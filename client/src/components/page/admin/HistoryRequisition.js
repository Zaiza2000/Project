import { Item } from "rc-menu";
import React, { useEffect, useState } from "react";

//function
import {
  getRequisition,
  listRequisition,
} from "../../functions/requisition.js";

export default function HistoryRequisition() {
  const [requisition, setRequisition] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    listRequisition().then((res) => {
      setRequisition(res.data);
    });
  };

  return (
    <div>
      <h1>HistoryRequisition</h1>
      {requisition.map((item, index) => (
        <div>
          <p>
            Requisition: {item.RID} , Product : {item.product_name} quantity:{" "}
            {item.quantity} , price: {item.price}
          </p>
        </div>
      ))}
    </div>
  );
}
