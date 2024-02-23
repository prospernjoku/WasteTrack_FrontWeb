import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";

function NylonTemplate() {
  const breadcrumbItems = [
    { label: "Nylon Management" },
    { label: "Nylon Details",url:"/nylon/details?tab=generated" },
    { label: "Nylon View"}
  ];
  return (
    <div className="container-fluid">
    <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        {[...Array(10)].map((element, index) => {
          return (
            <div key={index + 1} className="col-md-3 my-4">
              <img src="/images/scannerImg.png" alt="scannerImg" className="img-fluid" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NylonTemplate;
