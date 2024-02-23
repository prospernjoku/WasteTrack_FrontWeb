import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { FaRegUser } from "react-icons/fa";
import { RxEnvelopeClosed } from "react-icons/rx";
import TableComponents from "../../../../components/Table/TableComponents";
import TablePagination from "../../../../components/Table/TablePagination";

function NylonProdCmpnyDetails() {
    const breadcrumbItems = [
        { label: "User Management" },
        { label: "Nylon Production Company", url: "/nylon-production-company" },
        { label: "Nylon Production Company Details" },
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
                nylonproductioncompany@gmail.com
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider my-3"></div>
      <div className="row">
        <div className="col-md-12">
            <p className="primary-color fs-22 fw-500">Revenue Generated</p>
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
                      <td>
                      Enumeral Waste Solutions Limited
                      </td>
                      <td className="ws-nowrap">02/ 09/ 2023, 12:45 PM</td>
                      <td>₦37900.00</td>
                      <td>₦3,790.00</td>
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

export default NylonProdCmpnyDetails