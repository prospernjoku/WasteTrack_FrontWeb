import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import VendorStaffList from "../../../components/VendorDetails/VendorStaffList";

function AllVendorStaff() {
    const breadcrumbItems = [
        { label: "Staff Management" },
        { label: "All Staff" },
      ];
     
  return (
    <div className="container-fluid">
    <Breadcrumbs items={breadcrumbItems} />
    <VendorStaffList/>
  </div>
  )
}

export default AllVendorStaff