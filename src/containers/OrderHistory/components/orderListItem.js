import React from "react";

import { Wrapper } from "./order.styles";
import Button from "../../../components/Button";

/**
 * @param {String} orderNumber: the unique generated number for a particular order
 * @param {String} price: the total price of the order
 * @param {String} date: the date the order was made,
 * @param {Array} items: an array of the items bought;
 */
const OrderListItem = ({ _id, orderNumber, price, date, items, toggleDisplaySummary, path }) => {
  return (
    <Wrapper>
      <div className="list-card">
        <div style={{ width: "100%", marginBottom: 20 }}>
          <div className="flex">
            <p>Order number:</p>
            <p>{orderNumber}</p>
          </div>
          <div className="flex">
            <p>Date:</p>
            <p>{date}</p>
          </div>
          <div className="flex">
            <p>Price:</p>
            <p>N{price}</p>
          </div>
          <div className="flex">
            <Button
              buttonText="Track Order"
              className="btn track-btn"
              onClick={() => path.push(`tracking-order/${_id}`)}
            />

            <Button
              buttonText="View Summary"
              className="btn view-btn"
              onClick={() => toggleDisplaySummary(orderNumber)}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default OrderListItem;
