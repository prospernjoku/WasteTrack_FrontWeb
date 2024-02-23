import React, { useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import AllTickets from "../../../components/Ticketing/admin/AllTickets";
import InProgress from "../../../components/Ticketing/admin/InProgress";
import OnHold from "../../../components/Ticketing/admin/OnHold";
import Resolved from "../../../components/Ticketing/admin/Resolved";


function Ticketing() {
  const breadcrumbItems = [{ label: "Ticketing" }];
  const [activeTab, setActiveTab] = useState("all");

  const renderComponents = () => {
    switch (activeTab) {
      case "all":
        return <AllTickets />;
      case "inProgress":
        return <InProgress />;
      case "onHold":
        return <OnHold />;
      case "resolved":
        return <Resolved />;
      default:
        return <AllTickets />;
    }
  };

  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-md-12">
          <div className="tabs-container">
            <ul className="tabs">
              <li
                className={`${activeTab === "all" ? "active" : ""} tab`}
                onClick={() => {
                  setActiveTab("all");
                }}
              >
                All
              </li>
              <li
                className={`${activeTab === "inProgress" ? "active" : ""} tab`}
                onClick={() => {
                  setActiveTab("inProgress");
                }}
              >
                In Progress
              </li>
              <li
                className={`${activeTab === "onHold" ? "active" : ""} tab`}
                onClick={() => {
                  setActiveTab("onHold");
                }}
              >
                On Hold
              </li>
              <li
                className={`${activeTab === "resolved" ? "active" : ""} tab`}
                onClick={() => {
                  setActiveTab("resolved");
                }}
              >
                Resolved
              </li>
            </ul>
          </div>
        </div>
      </div>
      {renderComponents()}
    </div>
  );
}

export default Ticketing;
