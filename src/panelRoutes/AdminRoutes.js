import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MasterLayout from "../layout/MasterLayout";
import LoginPage from "../pages/auth/LoginPage";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import Register from "../pages/auth/Register";
import Profile from "../pages/admin/Profile";
import AdminDashboard from "../pages/admin/AdminDashboard";
import EditAdminProfile from "../components/profile/EditAdminProfile";
import ChangePassword from "../components/profile/ChangePassword";
import Notification from "../components/profile/Notification";
import AdminOrderDetails from "../pages/admin/VendorManagement/AdminOrderDetails";
import InvoicesList from "../pages/admin/Payments/InvoicesList";
import InvoiceView from "../pages/common/InvoiceView";
import AllSubadmins from "../pages/admin/userManagement/subadmin/AllSubadmins";
import AddSubadmin from "../pages/admin/userManagement/subadmin/AddSubadmin";
import SubadminDetails from "../pages/admin/userManagement/subadmin/SubadminDetails";
import AddVendor from "../pages/admin/userManagement/vendor/AddVendor";
import WasteManagementAgency from "../pages/admin/userManagement/wasteMgmtAgency/WasteManagementAgency";
import AddVendorStaff from "../pages/admin/userManagement/vendor/AddVendorStaff";
import WasteManagementStaffDetails from "../pages/admin/userManagement/wasteMgmtAgency/WasteManagementStaffDetails";
import WasteManagementAgencyDetails from "../pages/admin/userManagement/wasteMgmtAgency/WasteManagementAgencyDetails";
import NylonProductionCompany from "../pages/admin/userManagement/nylonproductioncompany/NylonProductionCompany";
import NylonProdCmpnyDetails from "../pages/admin/userManagement/nylonproductioncompany/NylonProdCmpnyDetails";
import StateGovtAgency from "../pages/admin/userManagement/stateGovtAgency/StateGovtAgency";
import StateGovtAgencyDetails from "../pages/admin/userManagement/stateGovtAgency/StateGovtAgencyDetails";
import EnforcementTeam from "../pages/admin/userManagement/enforcementTeam/EnforcementTeam";
import EnforcementTeamDetails from "../pages/admin/userManagement/enforcementTeam/EnforcementTeamDetails";
import NylonTemplate from "../pages/admin/NylonManagement/NylonTemplate";
import RevenueShared from "../pages/admin/Payments/RevenueShared";
import WithdrawlDetails from "../pages/admin/WithdrawlDetails";
import CreateWMStaff from "../components/usermanagement/CreateWMStaff";
import AllWMStaff from "../components/usermanagement/AllWMStaff";
import NylonGeneration from "../pages/admin/NylonManagement/NylonGeneration";
import NylonDetails from "../pages/admin/NylonManagement/NylonDetails";
import ViewAssignedNylonDetails from "../pages/admin/NylonManagement/ViewAssignedNylonDetails";
import Areas from "../pages/admin/VendorManagement/Areas";
import Allvendors from "../pages/admin/VendorManagement/Allvendors";
import VendorDetails from "../pages/admin/VendorManagement/VendorDetails";
import VendorRequests from "../pages/admin/VendorManagement/VendorRequest";
import OrderHistory from "../pages/admin/VendorManagement/OrderHistory";
import RevenueSharing from "../pages/admin/Payments/RevenueSharing";
import WithdrawlRequest from "../pages/admin/WithdrawlRequest";
import WasteCollection from "../pages/admin/WasteCollection";
import ScheduleCalendar from "../pages/admin/Calendar";
import Ticketing from "../pages/admin/Ticketing/Ticketing";
import TicketDetails from "../pages/admin/Ticketing/TicketDetails";
import { useSelector } from "react-redux";
import VendorStaffDetails from "../pages/admin/userManagement/vendor/VendorStaffDetails";
import VendorStaffSerialDetails from "../pages/admin/userManagement/vendor/VendorStaffSerialDetails";

function AdminRoutes() {
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Routes>
      <Route  path="/"
        element={loggedIn ? <MasterLayout /> : <Navigate to="/login" />} >
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile" element={<EditAdminProfile />} />
          <Route path="/profile/change-password" element={<ChangePassword />} />
          <Route path="/profile/notification" element={<Notification />} />
        </Route>
        <Route path="/subadmin/all" element={<AllSubadmins />} />
        <Route path="/subadmin/add" element={<AddSubadmin />} />
        <Route path="/subadmin/edit" element={<AddSubadmin />} />
        <Route path="/subadmin/details" element={<SubadminDetails />} />
        <Route
          path="/waste-management-agency"
          element={<WasteManagementAgency />}
        >
          <Route path="/waste-management-agency" element={<AllWMStaff />} />
          <Route
            path="/waste-management-agency/add-staff"
            element={<CreateWMStaff />}
          />
          <Route
            path="/waste-management-agency/edit-staff"
            element={<CreateWMStaff />}
          />
        </Route>
        <Route
          path="/waste-management-staff-details/id"
          element={<WasteManagementStaffDetails />}
        />
        <Route
          path="/waste-management-agency-details"
          element={<WasteManagementAgencyDetails />}
        />
        <Route
          path="/nylon-production-company"
          element={<NylonProductionCompany />}
        />
        <Route
          path="/nylon-production-company-details"
          element={<NylonProdCmpnyDetails />}
        />
        <Route path="/state-govt-agency" element={<StateGovtAgency />} />
        <Route
          path="/state-govt-agency-details"
          element={<StateGovtAgencyDetails />}
        />
        <Route path="/enforcement-team" element={<EnforcementTeam />} />
        <Route
          path="/enforcement-team-details"
          element={<EnforcementTeamDetails />}
        />

        {/*   NYLON MANAGEMENT */}
        <Route path="/nylon/generate" element={<NylonGeneration />} />
        <Route path="/nylon/details" element={<NylonDetails />} />
        <Route path="/nylon/template" element={<NylonTemplate />} />
        <Route
          path="/nylon/details/id"
          element={<ViewAssignedNylonDetails />}
        />
        {/* VENDOR MANAGEMENT */}
        <Route path="/vendor/areas" element={<Areas />} />
        <Route path="/vendor/all" element={<Allvendors />} />
        <Route path="/vendor/add" element={<AddVendor />} />
        <Route path="/vendor/edit" element={<AddVendor />} />
        <Route path="/vendor/add-staff" element={<AddVendorStaff />} />
        <Route path="/vendor/details/id" element={<VendorDetails />} />
        <Route path="/vendor/requests" element={<VendorRequests />} />
        <Route path="/vendor-staff-details/id" element={<VendorStaffDetails />} />
        <Route path="/vendor-staff-serials/id" element={<VendorStaffSerialDetails />} />

        <Route path="/vendor/order-history" element={<OrderHistory />} />
        <Route path="/order-details/id" element={<AdminOrderDetails />} />
        <Route path="/revenue-sharing" element={<RevenueSharing />} />
        <Route path="/revenue-shared" element={<RevenueShared />} />
        <Route path="/invoice" element={<InvoicesList />} />
        <Route path="/invoice-view" element={<InvoiceView />} />
        <Route path="/withdrawl" element={<WithdrawlRequest />} />
        <Route path="/withdrawl/details/id" element={<WithdrawlDetails />} />
        <Route path="/waste-collection" element={<WasteCollection />} />
        <Route path="/calendar" element={<ScheduleCalendar />} />
        <Route path="/ticketing" element={<Ticketing />} />
        <Route path="/ticket/details/id" element={<TicketDetails />} />
      </Route>

      {/* AUTHHENTICATION ROUTES */}
      <Route path="/login" element=  {!loggedIn ? <LoginPage /> : <Navigate to="/" />}/>
      <Route path="/register" element={ !loggedIn ? <Register />  : <Navigate to="/" />} />
      <Route path="/forgot-password" element={ !loggedIn ? <ForgotPassword />  : <Navigate to="/" />} />
      <Route path="/reset-password/:role/:id/:token" element={!loggedIn ? <ResetPassword />  : <Navigate to="/" />} />
    </Routes>
  );
}

export default AdminRoutes;
