import React from "react";
import { customers } from "../data/customerData";

function CustomerTable() {
 
  return (
    <div className="customer-table">
      <div className="table-header">
        <div className="input-wrapper date-input">
          <input type="date" placeholder="Select date" />
          <i className="fas fa-calendar-alt"></i>
        </div>

        <div className="input-wrapper price-range">
          <details className="custom-select">
            <summary className="select-trigger">
              <span>Price range</span>
              <div className="arrow"></div>
            </summary>
            <ul className="options">
              <li>Price range</li>
              <li>$50</li>
              <li>$100</li>
              <li>$200</li>
              <li>$201+</li>
            </ul>
          </details>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Purchase Date</th>
            <th>Payment Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} className="customer-data">
              <td className="customer-info">
                <img src={customer.img} alt="Person" />
                <div>
                  <p className="customer-name">{customer.name}</p>
                  <p className="customer-email">{customer.email}</p>
                </div>
              </td>
              <td className="purchase-date">
                <span className="date-badge">{customer.purchaseDate}</span>
              </td>
              <td className="payment-status">$ {customer.amount} -only</td>
              <td>
                <button className="details-button">DETAILS</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;
