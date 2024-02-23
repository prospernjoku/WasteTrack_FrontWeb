import React from "react";

function RecentInvoices() {
  return (
    <div className="outer-card my-3">
      <div className="card-header">
        <p>Recent Invoices</p>
      </div>
      <div className="card-body table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th className="gray-color fw-500">InvoiceId</th>
              <th className="gray-color fw-500">Vendor Code </th>
              <th className="gray-color fw-500">Company Name</th>
              <th className="gray-color fw-500">Amount</th>
              <th className="gray-color fw-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((element, index) => {
              return (
                <tr key={index + 1}>
                  <td>#123456</td>
                  <td>123456</td>
                  <td>Enumeral Solutions Ltd.</td>
                  <td>₦37900.00</td>
                  <td>
                    <span className="warning-badge"> Pending</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentInvoices;
