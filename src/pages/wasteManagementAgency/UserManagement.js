import React from 'react';
import { AiFillEye } from "react-icons/ai";
import Breadcrumbs from '../../components/Breadcrumbs';
import TableComponents from '../../components/Table/TableComponents';
import TablePagination from '../../components/Table/TablePagination';
function UserManagement() {
    const breadcrumbItems = [
        { label: "User Management" }
      ];
  return (
    <div className='container-fluid'>
         <Breadcrumbs items={breadcrumbItems} />
         <TableComponents />
      <div className="row my-4">
        <div className="col-md-12">
          <div className="table-wrapper table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Designation</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>Vendor</td>
                      <td>Lorem Ipsum</td>
                      <td>vendor@gmail.com</td>
                      <td>
                        <div className="tableAction-wrapper">
                          <button className="tableAction-btn btn-view">
                            <AiFillEye />
                          </button>
                        </div>
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
  )
}

export default UserManagement