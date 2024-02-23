import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import TableComponents from "../../components/Table/TableComponents";
import TablePagination from "../../components/Table/TablePagination";

function WmaSalesReport() {
  const breadcrumbItems = [{ label: "Sales Report" }];
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <TableComponents />
      <div className="row my-4">
        <div className="col-md-12">
          <div className="table-wrapper table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Buyer Name</th>
                  <th>Contact Number</th>
                  <th>Address</th>
                  <th>Quantity (Rolls)</th>
                  <th>Date of purchase</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>Lorem ipsum</td>
                      <td className="ws-nowrap">+234 09-461-4000</td>
                      <td>abc street, xyz area</td>
                      <td>10</td>
                      <td className="ws-nowrap">14/ 09/ 2023, 01:50 PM</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <TablePagination />
        </div>
      </div>
    </div>
  );
}

export default WmaSalesReport;
