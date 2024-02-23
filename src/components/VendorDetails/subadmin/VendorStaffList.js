import React, { useState } from "react";
import TableComponents from "../../Table/TableComponents";
import TablePagination from "../../Table/TablePagination";
import { Link } from "react-router-dom";
import EditVendorStaff from "../../Modals/EditVendorStaff";

function VendorStaffList() {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <TableComponents />
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-12">
          <div className="table-wrapper table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Vendor Staff Name</th>
                  <th>Email</th>
                  <th>Contact Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>Lorem ipsum</td>
                      <td>staff@gmail.com</td>
                      <td className="ws-nowrap">+234 09-461-4000</td>
                      <td className="ws-nowrap">
                        <Link to="/vendor-staff-details/id" className="primary-color">View Details</Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-12">
          <TablePagination />
        </div>
      </div>
      <EditVendorStaff
        isModalOpen={isEditModalOpen}
        setIsModalOpen={setEditModalOpen}
      />
    </div>
  );
}

export default VendorStaffList;
