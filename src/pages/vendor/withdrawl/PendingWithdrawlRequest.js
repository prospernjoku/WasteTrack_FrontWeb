import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { PiCurrencyNgnDuotone } from "react-icons/pi";
import TableComponents from "../../../components/Table/TableComponents";
import TablePagination from "../../../components/Table/TablePagination";
import {Checkbox} from 'antd';
function PendingWithdrawlRequest() {
  const breadcrumbItems = [
    { label: "Withdrawl" },
    { label: "Pending Request" },
  ];
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row mt-3">
        <div className="col-md my-2">
          <div className="top-details-card">
            <p className="fs-20 fw-500 heading-color mb-0">Total Amount</p>
            <div className="d-flex align-items-end justify-content-between">
              <p className="fs-30 fw-bold mb-0 heading-color">₦20,000</p>
              <div className="top-card-icon">
                <img src="/images/icons/totalAmt.svg" alt="pending-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md my-2">
          <div className="top-details-card">
            <p className="fs-20 fw-500 heading-color mb-0">Amount Withdrawn</p>
            <div className="d-flex align-items-end justify-content-between">
              <p className="fs-30 fw-bold mb-0 heading-color">₦15,000</p>
              <div className="top-card-icon">
                <img src="/images/icons/amtWithdrawn.png" alt="pending-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md my-2">
          <div className="top-details-card">
            <p className="fs-20 fw-500 heading-color mb-0">Amount Pending</p>
            <div className="d-flex align-items-end justify-content-between">
              <p className="fs-30 fw-bold mb-0 heading-color">₦400</p>
              <div className="top-card-icon">
                <img src="/images/icons/amtPending.svg" alt="pending-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md my-2">
          <div className="top-details-card">
            <p className="fs-20 fw-500 heading-color mb-0">Available Amount</p>
            <div className="d-flex align-items-end justify-content-between">
              <p className="fs-30 fw-bold mb-0 heading-color">₦5,000</p>
              <div className="top-card-icon">
                <img src="/images/icons/availableAmt.svg" alt="pending-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-auto">
          <div className="panel-card">
            <div className="card-body">
              <div>
                <p className="heading-color fs-22 fw-500 ">
                  Enter Withdrawal Amount
                </p>
              </div>
              <div className="setPrice-input">
                <span>
                  <PiCurrencyNgnDuotone />
                </span>
                <input className="w-100" defaultValue={400} />
              </div>
              <button className="primary-btn w-100 mb-3 mt-3">
                Send Request
              </button>
            </div>
          </div>
          <div className="mt-3">
            <p className="primary-color fs-20 text-justify">
              Select the serials for which you want to receive a withdrawal.
            </p>
          </div>
        </div>
        <div className="col-lg">
          <TableComponents />
          <div className="row my-3">
            <div className="col-lg-12">
              <div className="table-wrapper table-responsive">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th className="text-center table-checkbox"> <Checkbox ></Checkbox></th>
                      <th>S. No.</th>
                      <th>Serial Number</th>
                      <th>Collected on</th>
                      <th>Price/ Bag</th>
                      <th>Revenue Share</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(10)].map((element, index) => {
                      return (
                        <tr key={index + 1}>
                        <td className="text-center table-checkbox"> <Checkbox ></Checkbox></td>
                          <td>{index + 1}</td>
                          <td>HCXC8849287896</td>
                          <td>19 Sept 2023</td>
                          <td>₦160.00</td>
                          <td>₦24.00</td>
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

export default PendingWithdrawlRequest;
