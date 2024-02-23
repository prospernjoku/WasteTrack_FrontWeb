import React from "react";
import TablePagination from "../Table/TablePagination";
import TableComponents from "../Table/TableComponents";
import { Link } from "react-router-dom";

function AssignedNylons() {
  return (
    <div>
      <TableComponents />
      <div className="row my-4">
        <div className="col-md-12">
          <div className="table-wrapper table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Batch Number</th>
                  <th>Vendor Code</th>
                  <th>Company Name</th>
                  <th>Assigned Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>7478939857564</td>
                      <td>123456</td>
                      <td>Enumeral Waste Solutions Limited</td>
                      <td className="ws-nowrap">09/ 09/ 2023, 12:45 PM</td>
                      <td className="ws-nowrap">
                      <Link
                          to="/nylon/details/id"
                          className="primary-color fs-16 fw-500"
                        >
                          View Details
                        </Link>
                      </td>
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

export default AssignedNylons;
