import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { MdOutlineReceiptLong } from "react-icons/md";

function VendorWithdrawalDetails() {
  const breadcrumbItems = [
    { label: "Withdrawl" },
    { label: "Withdrawl History", url: "/withdrawl-history" },
    { label: "Withdrawl Details" },
  ];
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-md-12 d-md-flex align-items-end justify-content-between">
          <p className="fs-20 fw-500 mb-0">
            Unique ID :
            <span className="primary-color fw-bold">12345678998765</span>
          </p>
          <button className="primary-btn">
            <MdOutlineReceiptLong className="fs-22" /> Download Receipt
          </button>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-md-6 col-lg-4 my-2">
          <div className="panel-card secondary-border shadow-none">
            <div className="card-header border-0">
              <p>Request Info</p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col col-md-6">
                  <p className=" gray-color fs-16">Order Id</p>
                </div>
                <div className="col col-md-6">
                  <p className="fs-16 heading-color">#1234567899874562</p>
                </div>
              </div>
              <div className="row">
                <div className="col col-md-6">
                  <p className=" gray-color fs-16">Request Date & Time</p>
                </div>
                <div className="col col-md-6">
                  <p className="fs-16 heading-color">9 Sept 2023, 11:45AM</p>
                </div>
              </div>
              <div className="row">
                <div className="col col-md-6">
                  <p className="gray-color fs-16">Approval Date</p>
                </div>
                <div className="col col-md-6">
                  <p className="fs-16 heading-color">12 Sept 2023, 05:5PM</p>
                </div>
              </div>

              <div className="row">
                <div className="col col-md-6">
                  <p className=" gray-color fs-16">Status</p>
                </div>
                <div className="col col-md-6">
                  <p className="fs-16 heading-color fw-500 primary-color d-flex align-items-center">
                    <span className="status-dots primary-bg me-2"></span>{" "}
                    Completed
                  </p>
                </div>
              </div>
            </div>

            <div className="divider mb-3"></div>
            <div className="card-header border-0">
              <p>Account Details</p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <p className="heading-color fs-18">Bank Name</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="heading-color fs-18">Account Holder Name</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="heading-color fs-18">Account Number</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-8 my-2">
          <div className="panel-card secondary-border shadow-none">
            <div className="card-header border-0">
              <p>Payment Info</p>
            </div>
            <div className="card-body px-4">
              <div className="row justify-content-between">
                <div className="col-auto"><p>Potential Earning</p></div>
                <div className="col-auto"><p>₦3790.00</p></div>
              </div>
              <div className="row justify-content-between">
                <div className="col-auto"><p className="mb-0 fs-18 fw-500">Available for Withdrawl</p></div>
                <div className="col-auto"><p className="mb-0 fs-18 fw-500">₦2400.00</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorWithdrawalDetails;
