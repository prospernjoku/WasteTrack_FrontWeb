import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import TableComponents from "../../components/Table/TableComponents";
import TablePagination from "../../components/Table/TablePagination";

function Revenue() {
  const breadcrumbItems = [{ label: "Revenue Generated" }];
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
                  <th>Order Id</th>
                  <th>Vendor Code</th>
                  <th>Company Name</th>
                  <th>Order Date</th>
                  <th>Order Amount</th>
                  <th>Revenue Earned</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>#12345678987562</td>
                      <td>123456</td>
                      <td>Enumeral Waste Solutions Limited</td>
                      <td className="ws-nowrap">02/ 09/ 2023, 12:45 PM</td>
                      <td className="ws-nowrap">₦37900.00</td>
                      <td className="ws-nowrap">₦ 1,895.00</td>
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

export default Revenue;
