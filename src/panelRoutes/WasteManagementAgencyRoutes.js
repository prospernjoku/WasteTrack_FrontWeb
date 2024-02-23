import React from "react";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "../layout/MasterLayout";
import WMAgencyDashboard from "../pages/wasteManagementAgency/WMAgencyDashboard";
import NylonManagement from "../pages/wasteManagementAgency/Nylon/NylonManagement";
import WmaRevenueGenerated from "../pages/wasteManagementAgency/WmaRevenueGenerated";
import WmaSalesReport from "../pages/wasteManagementAgency/WmaSalesReport";
import WmaWasteCollection from "../pages/wasteManagementAgency/WmaWasteCollection";
// import Payments from '../pages/wasteManagementAgent/Payments';
import ScheduleCalendar from "../pages/admin/Calendar";
import VendorTicketing from "../pages/vendor/Ticketing/VendorTicketing";
import VendorTicketDetails from "../pages/vendor/Ticketing/VendorTicketDetails";
import CreateTicket from "../pages/vendor/Ticketing/CreateTicket";
import LoginPage from "../pages/auth/LoginPage";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import AllWmStaff from "../pages/wasteManagementStaff/AllWmStaff";
import AddWmstaff from "../pages/wasteManagementStaff/AddWmstaff";
import WmStaffDetails from "../pages/wasteManagementStaff/WmStaffDetails";
import ViewAssignedNylonDetails from "../pages/admin/NylonManagement/ViewAssignedNylonDetails";
import Profile from "../pages/admin/Profile";
import EditWMAgencyProfile from "../components/profile/EditWMAgencyProfile";
import ChangePassword from "../components/profile/ChangePassword";
import Notification from "../components/profile/Notification";
function WasteManagementAgencyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MasterLayout />}>
        <Route path="/" element={<WMAgencyDashboard />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile" element={<EditWMAgencyProfile />} />
          <Route path="/profile/change-password" element={<ChangePassword />} />
          <Route path="/profile/notification" element={<Notification />} />
        </Route>
        <Route path="/waste-management-staff" element={<AllWmStaff />} />
        <Route path="/staff/add" element={<AddWmstaff />} />
        <Route path="/staff/edit" element={<AddWmstaff />} />
        <Route path="/staff-details/id" element={<WmStaffDetails />} />
        <Route path="/nylon/management" element={<NylonManagement />} />
        <Route
          path="/nylon-details/id"
          element={<ViewAssignedNylonDetails />}
        />
        <Route path="/revenue" element={<WmaRevenueGenerated />} />
        <Route path="/report/sales" element={<WmaSalesReport />} />
        <Route path="/waste/collection" element={<WmaWasteCollection />} />
        {/* <Route path="/payments" element={<Payments />} /> */}
        <Route path="/calendar" element={<ScheduleCalendar />} />
        <Route path="/ticketing" element={<VendorTicketing />} />
        <Route path="/ticket/details/id" element={<VendorTicketDetails />} />
        <Route path="/ticket/create" element={<CreateTicket />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default WasteManagementAgencyRoutes;
