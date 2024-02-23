import React, { useState } from "react";
import { IoGlobeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RxEnvelopeClosed } from "react-icons/rx";
import { BiPhone } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";
import Breadcrumbs from "../../../components/Breadcrumbs";
import AllotedAreas from "../../../components/VendorDetails/AllotedAreas";
import PurchaseHistory from "../../../components/VendorDetails/PurchaseHistory";
import SalesHistory from "../../../components/VendorDetails/SalesHistory";
import VendorStaffList from "../../../components/VendorDetails/VendorStaffList";

function VendorDetails() {
  const breadcrumbItems = [
    { label: "Vendor Management" },
    { label: "All Vendors", url: "/vendor/all" },
    { label: "Vendor Details" },
  ];

  const [activeTab, setActiveTab] = useState("areasAlloted");
  const renderComponents = () => {
    switch (activeTab) {
      case "areasAlloted":
        return <AllotedAreas/>;
      case "purchaseHistory":
        return <PurchaseHistory/>;
      case "salesHistory":
        return <SalesHistory/>;
      case "vendorStaff":
        return <VendorStaffList/>;
      default:
        return <AllotedAreas/>;
    }
  };
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-md-12">
          <div className="panel-card">
            <div className="card-header">
              <p className="fs-18 heading-color">Vendor Details</p>
            </div>
            <div className="card-body">
              <p className="fs-18">
                Vendor code :
                <span className="primary-color fw-500 ms-2"> 123456</span>
              </p>
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <p className="fs-18 fw-500 heading-color text-decoration-underline ">
                    Enumeral Waste Solutions Limited
                  </p>
                  <p className="fs-18 fw-500 heading-color">
                    <IoGlobeOutline className="primary-color fs-4" />
                    website.com
                  </p>
                </div>
                <div className="col-lg-5">
                  <ul className="row list-unstyled justify-content-between mb-0">
                    <li className="col-md-6 col-lg-4">
                      <p className="fs-16 fw-500 heading-color">
                        <FaRegUser className="primary-color fs-5 me-2" />
                        Ralph Edwards
                      </p>
                    </li>
                    <li className="col-md-6 col-lg-4">
                      <p className="fs-16 fw-500 heading-color">
                        <RxEnvelopeClosed className="primary-color fs-5 me-2" />
                        vendor@gmail.com
                      </p>
                    </li>
                    <li className="col-md-6 col-lg-4">
                      <p className="fs-16 fw-500 heading-color">
                        <BiPhone className="primary-color fs-5 me-2" /> +234
                        90-461-4000
                      </p>
                    </li>
                  </ul>
                  <div className="d-flex align-items-center">
                    <span>
                      <LuMapPin className="fs-2 primary-color text-danger me-2" />
                    </span>
                    <p className="text-justify mb-0 fw-500 heading-color">
                      Lorem ipsum dolor sit amet. Nam ducimus repellendus At
                      voluptatem dignissimos in tenetur obcaecati
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tabs-container">
            <ul className="tabs">
              <li
                className={`${
                  activeTab === "areasAlloted" ? "active" : ""
                } tab`}
                onClick={() => {
                  setActiveTab("areasAlloted");
                }}
              >
                Areas Alloted
              </li>
              <li
                className={`${
                  activeTab === "purchaseHistory" ? "active" : ""
                } tab`}
                onClick={() => {
                  setActiveTab("purchaseHistory");
                }}
              >
                Purchase History
              </li>
              <li
                className={`${
                  activeTab === "salesHistory" ? "active" : ""
                } tab`}
                onClick={() => {
                  setActiveTab("salesHistory");
                }}
              >
                Sales History
              </li>
              <li
                className={`${activeTab === "vendorStaff" ? "active" : ""} tab`}
                onClick={() => {
                  setActiveTab("vendorStaff");
                }}
              >
                Vendor staff List
              </li>
            </ul>
          </div>
        </div>
      </div>
      {renderComponents()}
    </div>
  );
}

export default VendorDetails;
