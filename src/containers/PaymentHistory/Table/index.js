import React from "react";

import { Wrapper } from "./table.styles";
import moment from "moment";

/**
 *
 * @param {Array} produce: An array of objects
 * @param {Array} tableHeader: an array of the table header title
 */
const Table = ({ produce, tableHeader, toggleSummary }) => {
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
          {produce.map(item => {
            return (
              <tr key={item.orderNumber}>
                <td>{moment(item.createdAt).format('LL')}</td>
                <td>{item.orderNumber}</td>
                <td>{item.paymentReference}</td>
                {/* <td>
                  <span className="photo">
                    <img
                      className="mr-1"
                      src={
                        item.dispatchRiderImg ||
                        require("../../../assets/avatar.png")
                      }
                      alt={`{item.dispatchRider}`}
                      width="20"
                      height="20"
                    />
                  </span>
                  {item.dispatchRider}
                </td> */}
                {/* <td>
                  <span
                    className={`badge badge-pill ${
                      item.orderStatus === "completed"
                        ? "badge-completed"
                        : "badge-in-transit"
                    } `}
                  >
                    {item.orderStatus === "completed"
                      ? "Completed"
                      : "In Transit"}
                  </span>
                </td> */}

                <td>{`NGN ${item.amount}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Table;

// {
//     date: "14-11-2018",
//     orderNumber: "#GHY124RT00",
//     dispatchRider: "Mr Yusuf Daniel",
//     orderStatus: "inTransit",
//     price: 54600
//   },

// {
  /* <table className="table table-responsive-sm">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Order Number</th>
      <th scope="col">Dispatch Rider</th>
      <th scope="col">Status</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>13-02-2018</td>
      <td>#GH78563KL</td>
      <td>
        <img src={require("../../assets/avatar.png")} width="20" height="20" />{" "}
        <span className="ml-1">Mr Yusuf Daniel</span>
      </td>
      <td>
        <span className="badge badge-pill badge-completed ">completed</span>
      </td>
    </tr>
    <tr>
      <td>13-02-2018</td>
      <td>#GH78563KL</td>
      <td>
        <img src={require("../../assets/avatar.png")} width="20" height="20" />{" "}
        <span className="ml-1">Mr Yusuf Daniel</span>
      </td>
      <td>
        <span className="badge badge-pill badge-pending">in transit</span>
      </td>
    </tr>
    <tr>
      <td>13-02-2018</td>
      <td>#GH78563KL</td>
      <td>
        <img src={require("../../assets/avatar.png")} width="20" height="20" />{" "}
        <span className="ml-1">Mr Yusuf Daniel</span>
      </td>
      <td>
        <span className="badge badge-pill badge-completed ">completed</span>
      </td>
      <td />
    </tr>
  </tbody>
</table>; */
// }
