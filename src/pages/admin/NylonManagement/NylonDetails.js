import React, { useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import GeneratedNylons from "../../../components/NylonDetails/GeneratedNylons";
import AssignedNylons from "../../../components/NylonDetails/AssignedNylons";
import { useLocation, useNavigate } from "react-router-dom";

function NylonDetails() {
  const breadcrumbItems = [
    { label: "Nylon Management" },
    { label: "Nylon Details" },
  ];

  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search);
  const tab = queryParams.get('tab');

  const [selectedTab, setSelectedTab] = useState(tab ?? 'generated');


  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row mb-4">
        <div className="col-md-12">
          <button
            className={`${selectedTab==="generated" ? 'primary-btn' :'primary-outline-btn' } h-45`}
            onClick={() => {
              setSelectedTab("generated");
              navigate('/nylon/details?tab=generated')
            }}
          >
            Generated
          </button>
          <button
            className={`${selectedTab==="assigned" ? 'primary-btn' :'primary-outline-btn' } ms-3 h-45`}
            onClick={() => {
              setSelectedTab("assigned");
              navigate('/nylon/details?tab=assigned')
            }}
          >
            Assigned
          </button>
        </div>
      </div>
      {selectedTab === "generated" ? <GeneratedNylons /> : <AssignedNylons/>}
    </div>
  );
}

export default NylonDetails;
