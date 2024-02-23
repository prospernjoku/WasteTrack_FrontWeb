import React from "react";
import { Route, Routes } from "react-router-dom";
import Ticketing from "../pages/admin/Ticketing/Ticketing";
import TicketDetails from "../pages/admin/Ticketing/TicketDetails";
import MasterLayout from "../layout/MasterLayout";
import SubadminDashboard from "../pages/subadmin/SubadminDashboard";
import NylonManagement from "../pages/wasteManagementAgency/Nylon/NylonManagement";
import SubadminInvoices from "../pages/wasteManagementAgency/SubadminInvoices";
import ScheduleCalendar from "../pages/admin/Calendar";
import LoginPage from "../pages/auth/LoginPage";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import Vendors from "../pages/subadmin/userManagement/vendor/Vendors";
import VendorStaffDetails from "../pages/admin/userManagement/vendor/VendorStaffDetails";
import VendorStaffSerialDetails from "../pages/admin/userManagement/vendor/VendorStaffSerialDetails";
import VendorDetails from "../pages/subadmin/userManagement/vendor/VendorDetails";
import WasteManagementAgency from "../pages/subadmin/userManagement/wasteManagementAgency/WasteManagementAgency";
import WasteManagementStaffDetails from "../pages/admin/userManagement/wasteMgmtAgency/WasteManagementStaffDetails";
import NylonProductionCompany from "../pages/subadmin/userManagement/nylonProductionCompany/NylonProductionCompany";
import StateGovtAgency from "../pages/subadmin/userManagement/StateGovtAgency";
import EnforcementTeam from "../pages/subadmin/userManagement/EnforcementTeam";
import ViewAssignedNylonDetails from "../pages/admin/NylonManagement/ViewAssignedNylonDetails";
import InvoiceView from "../pages/common/InvoiceView";
import WasteManagement from "../pages/subadmin/WasteManagement";
import Revenue from "../pages/subadmin/Revenue";
import EditSubAdminProfile from "../components/profile/EditSubAdminProfile";
import ChangePassword from "../components/profile/ChangePassword";
import Notification from "../components/profile/Notification";
import Profile from "../pages/admin/Profile";
import WasteManagementAgencyDetails from "../pages/admin/userManagement/wasteMgmtAgency/WasteManagementAgencyDetails";

function SubadminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MasterLayout />}>
        <Route path="/" element={<SubadminDashboard />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/vendor-details/id" element={<VendorDetails />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile" element={<EditSubAdminProfile />} />
          <Route path="/profile/change-password" element={<ChangePassword/>} />
          <Route path="/profile/notification" element={<Notification />} />
        </Route>
        <Route
          path="/vendor-staff-details/id"
          element={<VendorStaffDetails />}
        />
        <Route
          path="/vendor-staff-serials/id"
          element={<VendorStaffSerialDetails />}
        />
        <Route
          path="/waste-management-agency"
          element={<WasteManagementAgency />}
        />
        <Route
          path="/waste-management-agency-details"
          element={<WasteManagementAgencyDetails />}
        />
        <Route
          path="/waste-management-staff-details/id"
          element={<WasteManagementStaffDetails />}
        />
        <Route
          path="/nylon-production-company"
          element={<NylonProductionCompany />}
        />
        <Route path="/state-govt-agency" element={<StateGovtAgency />} />
        <Route path="/enforcement-team" element={<EnforcementTeam />} />
        <Route path="/nylon/management" element={<NylonManagement />} />
        <Route
          path="/nylon-details/id"
          element={<ViewAssignedNylonDetails />}
        />
        <Route path="/waste/collection" element={<WasteManagement />} />
        <Route path="/invoice" element={<SubadminInvoices />} />
        <Route path="/invoice-view" element={<InvoiceView />} />
        <Route path="/calendar" element={<ScheduleCalendar />} />
        <Route path="/ticketing" element={<Ticketing />} />
        <Route path="/ticket/details/id" element={<TicketDetails />} />
        <Route path="/revenue" element={<Revenue />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default SubadminRoutes;
