import React from 'react'
import { Route, Routes } from "react-router-dom";
import MasterLayout from '../layout/MasterLayout';
import VendorStaffDashboard from '../pages/vendorStaff/VendorStaffDashboard';
import ScheduleCalendar from '../pages/admin/Calendar';
import VendorStaffWasteCollection from '../pages/vendorStaff/VendorStaffWasteCollection';
import VendorStaffSalesReport from '../pages/vendorStaff/VendorStaffSalesReport';
import VendorTicketing from '../pages/vendor/Ticketing/VendorTicketing';
import VendorTicketDetails from '../pages/vendor/Ticketing/VendorTicketDetails';
import CreateTicket from '../pages/vendor/Ticketing/CreateTicket';
import LoginPage from '../pages/auth/LoginPage';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';
import VendorStaffCollectedWaste from '../pages/vendorStaff/VendorStaffCollectedWaste';
import EditVendorStaffProfile from '../components/profile/EditVendorStaffProfile';
import ChangePassword from '../components/profile/ChangePassword';
import Profile from '../pages/admin/Profile';
import Notification from '../components/profile/Notification';
function VendorStaffRoutes() {
  return (
    <Routes>
    <Route path="/" element={<MasterLayout />}>
      <Route path="/" element={<VendorStaffDashboard />} />
      <Route path="/profile" element={<Profile />}>
        <Route path="/profile" element={<EditVendorStaffProfile/>} />
        <Route
          path="/profile/change-password"
          element={<ChangePassword />}
        />
        <Route path="/profile/notification" element={<Notification/>} />
      </Route>
      <Route path="/calendar" element={<ScheduleCalendar />} />
      <Route
        path="/waste/collection"
        element={<VendorStaffWasteCollection />}
      />
      <Route
        path="/waste/collected"
        element={< VendorStaffCollectedWaste/>}
      />
      <Route path="/report/sales" element={<VendorStaffSalesReport />} />
      <Route path="/ticketing" element={<VendorTicketing />} />
      <Route
        path="/ticket/details/id"
        element={<VendorTicketDetails />}
      />
      <Route path="/ticket/create" element={<CreateTicket />} />
    </Route>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<Register />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/reset-password" element={<ResetPassword />} />
  </Routes>
  )
}

export default VendorStaffRoutes