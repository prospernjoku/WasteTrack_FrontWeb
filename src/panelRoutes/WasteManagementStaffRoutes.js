import React from 'react'
import { Route, Routes } from "react-router-dom";
import ResetPassword from '../pages/auth/ResetPassword';
import ForgotPassword from '../pages/auth/ForgotPassword';
import Register from '../pages/auth/Register';
import LoginPage from '../pages/auth/LoginPage';
import ScheduleCalendar from '../pages/admin/Calendar';
import CreateTicket from '../pages/vendor/Ticketing/CreateTicket';
import VendorTicketDetails from '../pages/vendor/Ticketing/VendorTicketDetails';
import VendorTicketing from '../pages/vendor/Ticketing/VendorTicketing';
import WmsSalesReport from '../pages/wasteManagementStaff/WmsSalesReport';
import WmsRevenue from '../pages/wasteManagementStaff/WmsRevenue';
import WmsWasteCollection from '../pages/wasteManagementStaff/WmsWasteCollection';
import WMStaffDashboard from '../pages/wasteManagementStaff/WMStaffDashboard';
import MasterLayout from '../layout/MasterLayout';
import Profile from '../pages/admin/Profile';
import EditWmStaffProfile from '../components/profile/EditWmStaffProfile';
import Notification from '../components/profile/Notification';
import ChangePassword from '../components/profile/ChangePassword';
function WasteManagementStaffRoutes() {
  return (
    <Routes>
    <Route path="/" element={<MasterLayout />}>
      <Route path="/" element={<WMStaffDashboard/>} />
      <Route path="/profile" element={<Profile/>}>
        <Route path="/profile" element={<EditWmStaffProfile />} />
        <Route
          path="/profile/change-password"
          element={<ChangePassword/>}
        />
        <Route path="/profile/notification" element={<Notification/>} />
      </Route>
      <Route path="/waste/collection" element={<WmsWasteCollection/>} />
      <Route path="/revenue" element={<WmsRevenue/>} />
      <Route path="/report/sales" element={<WmsSalesReport/>} />
      <Route path="/ticketing" element={<VendorTicketing/>} />
      <Route
        path="/ticket/details/id"
        element={<VendorTicketDetails/>}
      />
      <Route path="/ticket/create" element={<CreateTicket/>} />
      <Route path="/calendar" element={<ScheduleCalendar/>} />
    </Route>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<Register />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/reset-password" element={<ResetPassword/>} />
  </Routes>
  )
}

export default WasteManagementStaffRoutes