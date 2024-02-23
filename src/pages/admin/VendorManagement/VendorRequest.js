import React, { useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import PendingVendors from "../../../components/VendorDetails/PendingVendors";
import RejectedVendors from "../../../components/VendorDetails/RejectedVendors";
import { useLocation, useNavigate } from "react-router-dom";
function VendorRequests() {
  const breadcrumbItems = [
    { label: "Vendor Management" },
    { label: "Vendor requests" },
  ];
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search);
  const tab = queryParams.get('tab');
  const [selectedTab, setSelectedTab] = useState(tab??"pending");
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row mb-4">
        <div className="col-md-12">
          <button
            className={`${
              selectedTab === "pending"
                ? "primary-btn"
                : "primary-outline-btn"
            } h-45`}
            onClick={() => {
              setSelectedTab("pending");
              navigate('/vendor/requests?tab=pending')
            }}
          >
            Pending
          </button>
          <button
            className={`${
              selectedTab === "rejected" ? "primary-btn" : "primary-outline-btn"
            } ms-3 h-45`}
            onClick={() => {
              setSelectedTab("rejected");
              navigate('/vendor/requests?tab=rejected')
            }}
          >
            Rejected
          </button>
        </div>
      </div>
      {selectedTab === "pending" ? <PendingVendors /> : <RejectedVendors/>}
    </div>
  );
}

export default VendorRequests;
