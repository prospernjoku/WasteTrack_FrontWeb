import React from "react";
import TablePagination from "../../../../components/Table/TablePagination";
import TableComponents from "../../../../components/Table/TableComponents";
import Breadcrumbs from "../../../../components/Breadcrumbs";

function VendorStaffSerialDetails() {
  const breadcrumbItems = [
    { label: "User Management" },
    { label: "Vendor", url: "/vendors" },
    { label: "Vendor Staff Serials" },
  ];
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
                  <th>S.No.</th>
                  <th>Serial Number</th>
                  <th>Batch Number</th>
                  <th>Vendor Code</th>
                  <th>Company Name</th>
                  <th>Buyer Name</th>
                  <th>Buyer Area</th>
                  <th>Date of Generation</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>HXC8849287896</td>
                      <td>7478939857564</td>
                      <td>123456</td>
                      <td>Enumeral Solutions Ltd.</td>
                      <td>Lorem ipsum</td>
                      <td>abc area, xyz street, pqr city</td>
                      <td>
                      10 Sept 2023
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <TablePagination />
    </div>
  );
}

export default VendorStaffSerialDetails;
