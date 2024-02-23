import React, { useState } from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { FaRegUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BiPhone } from "react-icons/bi";
import WasteCollectionVerified from "../../../../components/subadmin/WasteCollectionVerified";
import TicketsResolved from "../../../../components/subadmin/TicketsResolved";

function SubadminDetails() {
  const breadcrumbItems = [
    { label: "User Management" },
    { label: "Sub-Admin", url: "/subadmin/all" },
    { label: "Subadmin Details" },
  ];
  const [activeTab, setActiveTab] = useState("wasteCollection");
  const renderTabDetails = () => {
    switch (activeTab) {
      case "wasteCollection":
        return <WasteCollectionVerified/>;
      case "resolvedTickets":
        return <TicketsResolved />;
      default:
        return <WasteCollectionVerified/>;
    }
  };
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-md-12">
          <p className="heading-color fs-16 fw-500 mb-3">
            <FaRegUser className="me-3 fs-20 primary-color" />
            Ralph Edwards
          </p>
          <p className="heading-color fs-16 fw-500 mb-3">
            <FiMail className="me-3 fs-20 primary-color" />
            vendor@gmail.com
          </p>
          <p className="heading-color fs-16 fw-500 mb-3">
            <BiPhone className="me-3 fs-20 primary-color" />
            +234 90-461-4000
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tabs-container">
            <ul className="tabs">
              <li
                className={`${
                  activeTab === "wasteCollection" ? "active" : ""
                } tab`}
                onClick={() => {
                  setActiveTab("wasteCollection");
                }}
              >
                Waste Collection Verified
              </li>
              <li
                className={`${
                  activeTab === "resolvedTickets" ? "active" : ""
                } tab`}
                onClick={() => {
                  setActiveTab("resolvedTickets");
                }}
              >
                Tickets Resolved
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
            {
                renderTabDetails()
            }
        </div>
      </div>
    </div>
  );
}

export default SubadminDetails;
