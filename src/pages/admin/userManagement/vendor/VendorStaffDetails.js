import React from 'react'
import Breadcrumbs from '../../../../components/Breadcrumbs';
import { FaRegUser } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
import { RxEnvelopeClosed } from "react-icons/rx";
import TableComponents from "../../../../components/Table/TableComponents";
import TablePagination from "../../../../components/Table/TablePagination";
import { Link } from 'react-router-dom';

function VendorStaffDetails() {
  const breadcrumbItems = [
    { label: "User Management" },
    { label: "Vendor", url: "/vendor/all" },
    { label: "Vendor Staff Details" },
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
          <li className="col-md-6 col-lg-4">
            <p className="fs-16 fw-500 heading-color">
              <BiPhone className="primary-color fs-5 me-2" />
              +234 90-461-4000
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
                <th>Waste Collected (kg)</th>
                <th>Pickup Date</th>
                <th>Pickup Day</th>
                <th>Nylon Bag Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((element, index) => {
                return (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>50</td>
                    <td className='ws-nowrap'>15/ 09/ 2023</td>
                    <td>Wednesday</td>
                    <td>10</td>
                    <td className='ws-nowrap'><Link to="/vendor-staff-serials/id" className="primary-color">View Serial Details</Link></td>
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
  )
}

export default VendorStaffDetails