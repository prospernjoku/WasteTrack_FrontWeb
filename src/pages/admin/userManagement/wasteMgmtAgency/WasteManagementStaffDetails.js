import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { FaRegUser } from "react-icons/fa";
import { RxEnvelopeClosed } from "react-icons/rx";
import TableComponents from "../../../../components/Table/TableComponents";
import TablePagination from "../../../../components/Table/TablePagination";

function WasteManagementStaffDetails() {
  const breadcrumbItems = [
    { label: "User Management" },
    { label: "Waste Management Agency", url: "/waste-management-agency" },
    { label: "Waste Management Staff Details" },
  ];

  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-md-12">
          <ul className="list-unstyled">
            <li className="col-md-6 col-lg-4">
              <p className="fs-16 fw-500 heading-color">
                <FaRegUser className="primary-color fs-5 me-2" />
                Ralph Edwards
              </p>
            </li>
            <li className="col-md-6 col-lg-4">
              <p className="fs-16 fw-500 heading-color">
                <RxEnvelopeClosed className="primary-color fs-5 me-2" />
                wastemanagementstaff@gmail.com
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider my-3"></div>
      <div className="row">
        <div className="col-md-12">
            <p className="primary-color fs-22 fw-500">Waste Collected</p>
        </div>
      </div>
      <TableComponents/>
      <div className="row my-4">
        <div className="col-md-12">
          <div className="table-wrapper table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Serial Number</th>
                  <th>Buyer Name</th>
                  <th>Contact Number</th>
                  <th>Collection Date</th>
                  <th>Validation</th>
                  <th>Status</th>
                  <th>Remark</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>HXC8849287896</td>
                      <td>Lorem ipsum</td>
                      <td className="ws-nowrap">
                      +234 09-461-4000
                      </td>
                      <td className="ws-nowrap">06/ 09/ 2023, 02:45 PM</td>
                      <td className="ws-nowrap"><p className="primary-color fw-500 mb-0">Collected- Original</p></td>
                      <td>Verified</td>
                      <td className="ws-nowrap">Nylon was original.</td>
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

export default WasteManagementStaffDetails;
