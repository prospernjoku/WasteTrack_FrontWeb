import React from "react";
import { FaRegChartBar } from "react-icons/fa";
import { PiHandbagBold } from "react-icons/pi";
import { BsTruck } from "react-icons/bs";

function PaymentStatistics() {
  return (
    <div className="outer-card my-3">
      <div className="card-header border-0">
        <p>Payment Statistics </p>
      </div>
      <div className="card-body">
        <div className=" dash-Bordered-Card">
          <div className="round-icon icon-blue">
            <FaRegChartBar />
          </div>
          <div className="">
            <p className="mb-0 gray-color">Total Transactions</p>
            <p className="mb-0 blue-color fw-bold fs-40">₦37,900.00</p>
          </div>
        </div>
        <div className=" dash-Bordered-Card">
          <div className="round-icon icon-yellow">
          <PiHandbagBold />
          </div>
          <div className="">
            <p className="mb-0 gray-color">Nylon Bag Generated</p>
            <p className="mb-0 yellow-color fw-bold fs-40">50,000</p>
          </div>
        </div>
        <div className=" dash-Bordered-Card">
          <div className="round-icon icon-primary">
            <BsTruck />
          </div>
          <div className="">
            <p className="mb-0 gray-color">Nylon Bag Collected</p>
            <p className="mb-0 primary-color fw-bold fs-40">45,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentStatistics;
