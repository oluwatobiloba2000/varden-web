import React from "react";
// import Button from "../../components/Button";

import { Wrapper } from "./table.styles";
import moment from "moment";

/**
 *
 * @param {Array} produce: An array of objects
 * @param {Array} tableHeader: an array of the table header title
 */
const Table = ({ produce, tableHeader , openSummary}) => {
  let productDetails;
  produce.map(item => {
    return item.produce.map(prod => {
      return (productDetails = {
        name: prod.name,
        image: prod.images
      });
    });
  });
  return (
    <Wrapper>
      <table className="table table-borderless table-responsive-sm">
        <thead>
          <tr>
            {tableHeader.map(list => {
              return (
                <th scope="col" key={list}>
                  {list}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {produce && produce.map(item => {
            return (
              <tr key={item.orderNumber}>
                <td style={{ paddingTop: 20 }}>
                  <span className="photo">
                    <img src={productDetails.image} alt="" />
                  </span>
                  {productDetails.name}
                </td>
                <td style={{ paddingTop: 20 }}>{moment(item.createdAt).format('LL')}</td>
                <td style={{ paddingTop: 20 }}>{item.orderNumber}</td>
                <td style={{ paddingTop: 20 }}>{item.total}</td>
                {/* <td
                  style={{ paddingTop: 20 }}
                  className={
                    item.status === "completed" ? "completed" : "in-transit"
                  }
                >
                  {item.status}
                </td> */}
                <td style={{ paddingTop: 20 }}>
                  <span
                    className={
                      item.status === "completed"
                        ? "badge badge-pill badge-completed "
                        : "badge badge-pill badge-pending"
                    }
                  >
                    {item.status}
                  </span>
                </td>
                {/* <td>
                  <Button
                    buttonText="Edit"
                    className="tb-edit-btn"
                    height="30px"
                   
                  />
                  <Button
                    buttonText="Delete"
                    className="tb-delete-btn"
                    height="30px"
                  />
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Table;
