import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import WithdrawalChart from "../../../charts/vendor/WithdrawalChart";
import TableComponents from "../../../components/Table/TableComponents";
import TablePagination from "../../../components/Table/TablePagination";
import { Link } from "react-router-dom";

function WithdrawlHistory() {
  const breadcrumbItems = [
    { label: "Withdrawl" },
    { label: "Withdrawl History" },
  ];
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row mb-3">
        <div className="col-lg-5">
          <div className="row">
            <div className="col-lg-6 my-2">
              <div className="top-details-card">
                <p className="fs-20 fw-500 heading-color mb-0">
                  Withdrawals Pending
                </p>
                <div className="d-flex align-items-end justify-content-between">
                  <p className="fs-40 fw-bold mb-0 heading-color">10</p>
                  <div className="top-card-icon">
                    <img
                      src="/images/icons/amtPending.svg"
                      alt="pending-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 my-2">
              <div className="top-details-card">
                <p className="fs-20 fw-500 heading-color mb-0">
                  Withdrawals Confirmed
                </p>
                <div className="d-flex align-items-end justify-content-between">
                  <p className="fs-40 fw-bold mb-0 heading-color">30</p>
                  <div className="top-card-icon">
                    <img
                      src="/images/icons/confirmed.svg"
                      alt="confirmed-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 my-2">
              <div className="top-details-card">
                <p className="fs-20 fw-500 heading-color mb-0">
                  Withdrawals Completed
                </p>
                <div className="d-flex align-items-end justify-content-between">
                  <p className="fs-40 fw-bold mb-0 heading-color">50</p>
                  <div className="top-card-icon">
                    <img
                      src="/images/icons/completed.svg"
                      alt="completed-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 my-2">
              <div className="top-details-card">
                <p className="fs-20 fw-500 heading-color mb-0">
                  Withdrawals Cancelled
                </p>
                <div className="d-flex align-items-end justify-content-between">
                  <p className="fs-40 fw-bold mb-0 heading-color">5</p>
                  <div className="top-card-icon">
                    <img src="/images/icons/canceled.svg" alt="canceled-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="panel-card h-100">
            <div className="card-header border-0">
              <p>Withdrawal History</p>
            </div>
            <div className="card-body h-100">
              <WithdrawalChart />
            </div>
          </div>
        </div>
      </div>
      <TableComponents />
      <div className="row my-3">
        <div className="col-md-12">
          <div className="table-wrapper table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Request Id</th>
                  <th>Amount</th>
                  <th>Request Date</th>
                  <th>Approve / Reject Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>#123456789</td>
                      <td className="ws-nowrap">₦758.00</td>
                      <td className="ws-nowrap">09/ 09/ 2023, 11:45 AM</td>
                      <td className="ws-nowrap">10/ 09/ 2023, 01:45 PM</td>
                      <td><span className="primary-badge">Approved</span></td>
                      <td className="ws-nowrap">
                        <Link to="/withdrawl-details" className="primary-color">View Details</Link>
                      </td>
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
  );
}

export default WithdrawlHistory;
