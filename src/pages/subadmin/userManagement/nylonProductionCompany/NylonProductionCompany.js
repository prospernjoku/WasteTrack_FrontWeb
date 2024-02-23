import React from "react";
import { FaRegUser } from "react-icons/fa";
import { RxEnvelopeClosed } from "react-icons/rx";
import { BiPhone } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import TablePagination from "../../../../components/Table/TablePagination";
import TableComponents from "../../../../components/Table/TableComponents";

function NylonProductionCompany() {
  const breadcrumbItems = [
    { label: "User Management" },
    { label: "Nylon Production Company" },
  ];
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-lg-auto">
          <div className="panel-card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-auto">
                  <div className="d-inline-block my-3 position-relative">
                    <img
                      src="/images/userLg.png"
                      alt="user-img"
                      className="profileFrm-UserImg"
                    />
                  </div>
                </div>
                <div className="col-lg-auto">
                  <p className="fs-20 fw-600">Nylon Company name</p>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <p className="fw-500 fs-16 heading-color">
                        <FaRegUser className="primary-color fs-5 me-2" />
                        Lorem Ipsum
                      </p>
                    </li>
                    <li>
                      <p className="fw-500 fs-16 heading-color">
                        <RxEnvelopeClosed className="primary-color fs-5 me-2" />
                        company@gmail.com
                      </p>
                    </li>
                    <li>
                      <p className="fw-500 fs-16 heading-color">
                        <BiPhone className="primary-color fs-5 me-2" />
                        +234 90-461-4000
                      </p>
                    </li>
                    <li>
                      <p className="fw-500 fs-16 heading-color">
                        <HiOutlineLocationMarker className="primary-color fs-5 me-2" />
                        abc colony, xyz area, pqr city, 123456
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 mt-3">
          <div className="row">
            <div className="col-md-12">
              <p className="primary-color fs-24 fw-500">Revenue Generated</p>
            </div>
          </div>
          <TableComponents />
          <div className="row my-4">
            <div className="col-md-12">
              <div className="table-wrapper table-responsive">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>S.No.</th>
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
                          <td className="ws-nowrap">₦3,790.00</td>
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
      </div>
    </div>
  );
}

export default NylonProductionCompany;
