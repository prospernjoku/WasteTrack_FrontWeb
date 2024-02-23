import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import TableComponents from "../../components/Table/TableComponents";
import TablePagination from "../../components/Table/TablePagination";
import {MdOutlinePayments} from 'react-icons/md';
import {FaArrowTrendDown,FaArrowTrendUp} from 'react-icons/fa6';
function WmaRevenueGenerated() {
  const breadcrumbItems = [{ label: "Revenue Generated" }];
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row mb-4">
        <div className="col-md my-2">
          <div className="revenue-info-card">
            <div>
              <p className="primary-color fw-500 fs-30 mb-0">₦90,000</p>
              <p className="gray-color fs-16 mb-0">Total Revenue Earned</p>
            </div>
            <div className="revenue-card-icon up-trend">
              <span>
                <MdOutlinePayments />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md my-2">
          <div className="revenue-info-card">
            <div>
              <p className="gray-light fw-500 fs-14 mb-0">This Week</p>
              <p className="primary-color fw-500 fs-30 mb-0">₦3,500</p>
              <p className="gray-light fs-14 mb-0">
                <span className="red-color">-5%</span> compared to last week
              </p>
            </div>
            <div className="revenue-card-icon down-trend">
              <span>
                <FaArrowTrendDown />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md my-2">
          <div className="revenue-info-card">
            <div>
              <p className="gray-light fs-14 mb-0 fw-500">This Month</p>
              <p className="primary-color fw-500 fs-30 mb-0">₦15,000</p>
              <p className="gray-light fs-14 mb-0">
                <span className="primary-color">+10%</span> compared to last
                Month
              </p>
            </div>
            <div className="revenue-card-icon up-trend">
              <span>
                <FaArrowTrendUp />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md my-2">
          <div className="revenue-info-card">
            <div>
              <p className="gray-light fs-14 mb-0 fw-500">This Year</p>
              <p className="primary-color fw-500 fs-30 mb-0">₦45,000</p>
              <p className="gray-light fs-14 mb-0">
                <span className="red-color">-10%</span> compared to last Year
              </p>
            </div>
            <div className="revenue-card-icon down-trend">
              <span>
                <FaArrowTrendDown />
              </span>
            </div>
          </div>
        </div>
      </div>

      <TableComponents />
      <div className="row my-4">
        <div className="col-md-12">
          <div className="table-wrapper table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Order Id</th>
                  <th>Order Date</th>
                  <th>Vendor Code</th>
                  <th>Company Name</th>
                  <th>Amount paid</th>
                  <th>Revenue Earned</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>#12345678987562</td>
                      <td className="ws-nowrap">02/ 09/ 2023, 12:45 PM</td>
                      <td>123456</td>
                      <td>Enumeral Waste Solutions Limited</td>
                      <td>₦15000.00</td>
                      <td>₦1500.00</td>
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

export default WmaRevenueGenerated;
