import "./style/main.scss";
import React from "react";
import AdminRoutes from "./panelRoutes/AdminRoutes";
import SubadminRoutes from "./panelRoutes/SubadminRoutes";
import VendorRoutes from "./panelRoutes/VendorRoutes";
import VendorStaffRoutes from "./panelRoutes/VendorStaffRoutes";
import WasteManagementStaffRoutes from "./panelRoutes/WasteManagementStaffRoutes";
import WasteManagementAgencyRoutes from "./panelRoutes/WasteManagementAgencyRoutes";
import GovtAgencyRoutes from "./panelRoutes/GovtAgencyRoutes";
import { useSelector } from "react-redux";
import DefaultRoutes from "./panelRoutes/DefaultRoutes";

function App() {

  const userInfo = useSelector((state)=>state.auth.user)
    switch (userInfo?.role) {
      case "admin":
        return <AdminRoutes/>
      case "subadmin":
        return <SubadminRoutes/>
      case "vendor":
        return <VendorRoutes/>;
      case "vendorStaff":
        return <VendorStaffRoutes/>;
      case "govtAgency":
        return <GovtAgencyRoutes/>
      case "wasteMgmtStaff":
        return <WasteManagementStaffRoutes/>;
      case "wasteMgmtAgency":
        return <WasteManagementAgencyRoutes/>;
      default : 
        return <DefaultRoutes/>
    }

}
export default App;
