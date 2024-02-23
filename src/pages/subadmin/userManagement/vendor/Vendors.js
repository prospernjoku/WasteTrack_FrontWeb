import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { Link } from "react-router-dom";
import TableComponents from "../../../../components/Table/TableComponents";
import TablePagination from "../../../../components/Table/TablePagination";

function Vendors() {
  const breadcrumbItems = [
    { label: "Vendor Management" },
    { label: "All vendors" },
  ];
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <TableComponents/>
      <div className="row my-4">
        <div className="col-md-12">
          <div className="table-wrapper table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Code</th>
                  <th>Company Name</th>
                  <th>Company Address</th>
                  <th>Email</th>
                  <th>Contact Name</th>
                  <th>Date Added</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>123456</td>
                      <td>Enumeral Waste Solutions Limited</td>
                      <td>
                        Lorem ipsum dolor sit amet. Nam ducimus repellendus At
                        voluptatem
                      </td>
                      <td>vendor@gmail.com</td>
                      <td>Lorem ipsum</td>
                      <td className="ws-nowrap">19 Sept 2023</td>
                      <td className="ws-nowrap"><Link to="/vendor-details/id" className="primary-color">View Details</Link></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <TablePagination/>
    </div>
  );
}

export default Vendors;
