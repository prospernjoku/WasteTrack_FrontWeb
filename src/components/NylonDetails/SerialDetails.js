import React from "react";

function SerialDetails() {
  return (
    <div className="row">
      <div className="col-md-12 mb-4">
        <div className="table-wrapper table-responsive">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Serial Number</th>
                <th>Date of Collection</th>
                <th>Collected by</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((element, index) => {
                return (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>HXC8849287896</td>
                    <td className="ws-nowrap">02/ 09/ 2023, 12:45 PM</td>
                    <td>Lorem ipsum</td>
                    <td>
                     <p className="mb-0 primary-color fw-500">Collected</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SerialDetails;
