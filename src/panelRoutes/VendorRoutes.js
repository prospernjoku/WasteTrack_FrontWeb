import React from 'react'
import { Route, Routes } from "react-router-dom";
import MasterLayout from '../layout/MasterLayout';
import VendorDashboard from '../pages/vendor/VendorDashboard';
import EditVendorProfile from '../components/profile/EditVendorProfile';
import ChangePassword from '../components/profile/ChangePassword';
import Notification from '../components/profile/Notification';
import CreatevendorStaff from '../pages/vendor/staffManagement/CreatevendorStaff';
import AllVendorStaff from '../pages/vendor/staffManagement/AllVendorStaff';
import BuyNylon from '../pages/vendor/BuyNylon';
import OrderCheckout from '../pages/vendor/order/OrderCheckout';
import Orderdetails from '../pages/vendor/order/Orderdetails';
import WasteManagementVendor from '../pages/vendor/wasteManagement/WasteManagementVendor';
import SalesReport from '../pages/vendor/SalesReport';
import VendorAreas from '../pages/vendor/VendorAreas';
import ScheduleCalendar from '../pages/admin/Calendar';
import VendorTicketing from '../pages/vendor/Ticketing/VendorTicketing';
import VendorTicketDetails from '../pages/vendor/Ticketing/VendorTicketDetails';
import CreateTicket from '../pages/vendor/Ticketing/CreateTicket';
import LoginPage from '../pages/auth/LoginPage';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';
import VendorOrders from '../pages/vendor/order/VendorOrders';
import PendingWithdrawlRequest from '../pages/vendor/withdrawl/PendingWithdrawlRequest';
import WithdrawlHistory from '../pages/vendor/withdrawl/WithdrawlHistory';
import VendorWithdrawalDetails from '../pages/vendor/withdrawl/VendorWithdrawalDetails';
import VendorProfile from '../pages/vendor/VendorProfile';
import VendorBankDetails from '../pages/vendor/VendorBankDetails';
import VendorStaffDetails from '../pages/vendor/VendorStaffDetails';
import VendorStaffSerialDetails from '../pages/vendor/VendorStaffSerialDetails';
function VendorRoutes() {
  return (
    <Routes>
    <Route element={<MasterLayout/>}>
      <Route path="/" element={<VendorDashboard/>} />
      <Route path="/profile" element={<VendorProfile/>}>
        <Route path="/profile" element={<EditVendorProfile/>} />
        <Route
          path="/profile/change-password"
          element={<ChangePassword />}
        />
        <Route path="/profile/notification" element={<Notification/>} />
        <Route path="/profile/bank-details" element={<VendorBankDetails/>} />
      </Route>
      <Route
        path="/vendor-staff/add"
        element={<CreatevendorStaff/>}
      />
      <Route path="/vendor-staff/all" element={<AllVendorStaff/>} />
      <Route path="/vendor-staff-details/id" element={<VendorStaffDetails/>} />
      <Route path="/vendor-staff-serials/id" element={<VendorStaffSerialDetails/>} />
      <Route path="/nylon/buy" element={<BuyNylon/>} />
      <Route path="/order/checkout" element={<OrderCheckout/>} />
      <Route path="/order/history" element={<VendorOrders/>} />
      <Route path="/order/details/id" element={<Orderdetails/>} />
      <Route
        path="/waste-management"
        element={<WasteManagementVendor/>}
      />
      <Route path="/report/sales" element={<SalesReport/>} />
      <Route path="/withdrawl-pending" element={<PendingWithdrawlRequest/>}/>
      <Route path="/withdrawl-history" element={<WithdrawlHistory/>}/>
      <Route path="/withdrawl-details" element={<VendorWithdrawalDetails/>}/>
      <Route path="/areas" element={<VendorAreas/>} />
      <Route path="/calendar" element={<ScheduleCalendar/>} />
      <Route path="/ticketing" element={<VendorTicketing/>} />
      <Route
        path="/ticket/details/id"
        element={<VendorTicketDetails/>}
      />
      <Route path="/ticket/create" element={<CreateTicket/>} />
    </Route>
    {/* AUTHHENTICATION ROUTES */}
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/register" element={<Register />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/reset-password" element={<ResetPassword />} />
  </Routes>
  )
}

export default VendorRoutes