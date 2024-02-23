import React from "react"
import { AiFillPieChart,AiOutlineLineChart } from "react-icons/ai";
import { FaRegCalendarAlt,FaRegUser,FaRegMoneyBillAlt } from "react-icons/fa";
import { RiDeleteBin5Line,RiFileList3Line } from "react-icons/ri";
import { MdOutlinePayments,MdOutlineLocationOn} from "react-icons/md";
import { BiMessage,BiMoneyWithdraw } from "react-icons/bi";
import { HiOutlineShoppingBag,HiOutlineUsers } from "react-icons/hi";
import { BsBoxSeam } from "react-icons/bs";
import { PiScrollDuotone,PiMoneyDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
// ADMIN ROUTES
 export const adminSidebar = [
    getItem(<Link to="/">Dashboard</Link>, "/", <AiFillPieChart />),
    getItem(<span>User Management</span>, "user", <FaRegUser />, [
      getItem(<Link to="/subadmin/all">Sub-Admin</Link>, "/subadmin/all"),
      getItem(<Link to="/vendor/all">Vendor</Link>, "/vendors"),
      getItem(<Link to="/waste-management-agency">Waste Management Agency</Link>, "/waste-management-agency"),
      getItem(<Link to="/nylon-production-company">Nylon Production Company</Link>, "/nylon-production-company"),
      getItem(<Link to="/state-govt-agency">State Government Agency</Link>, "/state-govt-agency"),
      getItem(<Link to="/enforcement-team">Enforcement Team</Link>, "/enforcement-team"),
    ]),
    getItem(<span>Nylon Management</span>, "sub2", <HiOutlineShoppingBag />, [
      getItem(<Link to="/nylon/generate">Nylon Generation</Link>, "/nylon/generate"),
      getItem(<Link to="/nylon/details">Nylon Details</Link>, "/nylon/details"),
    ]),
    getItem(<span>Vendor Management</span>, "sub3", <HiOutlineUsers />, [
      getItem(<Link to="/vendor/add">Add Vendor</Link>, "/user/create/vendor2"),
      getItem(<Link to="/vendor/areas">Areas</Link>, "/vendor/areas"),
      getItem(<Link to="/vendor/all">All Vendors</Link>, "/vendor/all"),
      getItem(<Link to="/vendor/requests">Vendor Requests</Link>, "/vendor/requests"),
      getItem(<Link to="/vendor/order-history">Order History</Link>, "/vendor/order-history"),
    ]),
    getItem(<span>Revenue</span>, "sub4", <MdOutlinePayments />, [
      getItem(<Link to="/revenue-sharing">Revenue Sharing</Link>, "/revenue-sharing"),
      getItem(<Link to="/revenue-shared">Revenue Shared</Link>, "/revenue-shared"),
    ]),
    getItem(<Link to="/withdrawl">Withdrawl Request</Link>, "/withdrawl" ,<BiMoneyWithdraw/>),
    getItem(<Link to="/invoice">Invoice</Link>, "/invoice" ,<RiFileList3Line/>),
    getItem(<Link to="/waste-collection">Waste Collection</Link>, "/waste-collection",<RiDeleteBin5Line/>),
    getItem(<Link to="/calendar">Calendar</Link>, "14" ,<FaRegCalendarAlt/>),
    getItem(<Link to="/ticketing">Ticketing</Link>, "/ticketing",<BiMessage/>),
  ];
  export const vendorSidebar = [
    getItem(<Link to="/">Dashboard</Link>, "/", <AiFillPieChart />),
    getItem(<span>Staff Management</span>, "staff", <FaRegUser />, [
        getItem(<Link to="/vendor-staff/add">Add Vendor Staff</Link>, "/vendor-staff/create"),
        getItem(<Link to="/vendor-staff/all">All Vendor Staff</Link>, "/vendor-staff/all"),
      ]),
    getItem(<span>Order Management</span>, "order", <BsBoxSeam />, [
        getItem(<Link to="/nylon/buy">Buy Nylon</Link>, "/nylon/buy"),
        getItem(<Link to="/order/history">My Orders</Link>, "/order/history"),
      ]),
    getItem(<Link to="/waste-management">Waste Management</Link>, "/waste-management", <RiDeleteBin5Line />),
      getItem(<Link to="/report/sales">Sales Report</Link>, "/report/sales" ,<AiOutlineLineChart/>),
      getItem(<span>Withdrawl</span>, "withdrawl",<BiMoneyWithdraw/>, [
        getItem(<Link to="/withdrawl-pending">Pending Request</Link>, "/withdrawl-pending"),
        getItem(<Link to="/withdrawl-history">Withdrawl History</Link>, "/withdrawl-history"),
      ]),
      getItem(<Link to="/areas">Assigned Areas</Link>, "/areas" ,<MdOutlineLocationOn/>),
      getItem(<Link to="/calendar">Calendar</Link>, "/calendar" ,<FaRegCalendarAlt/>),
      getItem(<Link to="/ticketing">Tickets</Link>, "/ticketing" ,<BiMessage/>),
  ]
  export const vendorStaffSidebar = [
    getItem(<Link to="/">Dashboard</Link>, "/", <AiFillPieChart />),
    getItem(<span>Waste Management</span>, "waste", <BsBoxSeam />, [
      getItem(<Link to="/waste/collection">Upload Waste Collection</Link>, "/waste/collection"),
      getItem(<Link to="/waste/collected">Collected Waste Report</Link>, "/waste/collected"),
    ]),
    getItem(<Link to="/report/sales">Sales Report</Link>, "/report/sales" ,<AiOutlineLineChart/>),
    getItem(<Link to="/calendar">Calendar</Link>, "/calendar" ,<FaRegCalendarAlt/>),
    getItem(<Link to="/ticketing">Tickets</Link>, "/ticketing" ,<BiMessage/>),
  ]
  export const wasteManagementStaffSidebar = [
    getItem(<Link to="/">Dashboard</Link>, "/", <AiFillPieChart />),
    getItem(<Link to="/waste/collection">Waste collection</Link>, "/waste/collection",<RiDeleteBin5Line/>),
    getItem(<Link to="/revenue">Revenue Generated</Link>, "/revenue",<FaRegMoneyBillAlt/>),
    getItem(<Link to="/report/sales">Sales Report</Link>, "/report/sales" ,<AiOutlineLineChart/>),
    getItem(<Link to="/calendar">Calendar</Link>, "/calendar" ,<FaRegCalendarAlt/>),
    getItem(<Link to="/ticketing">Tickets</Link>, "/ticketing" ,<BiMessage/>),
  ]
  export const wasteManagementAgencySidebar = [
    getItem(<Link to="/">Dashboard</Link>, "/", <AiFillPieChart />),
    getItem(<span>Staff Management</span>, "staf", <BsBoxSeam />, [
      getItem(<Link to="/staff/add">Add Staff</Link>, "/staff/add"),
      getItem(<Link to="/waste-management-staff">All Staff</Link>, "/waste-management-staff"),
    ]),
    // getItem(<Link to="/user/management">User Management</Link>, "/user/management", <FaRegUser />),
    getItem(<Link to="/nylon/management">Nylon Serial Management</Link>, "/nylon/management",<HiOutlineShoppingBag/>),
    getItem(<Link to="/waste/collection">Waste collection</Link>, "/waste/collection",<RiDeleteBin5Line/>),
    getItem(<Link to="/revenue">Revenue Generated</Link>, "/revenue",<FaRegMoneyBillAlt/>),
    getItem(<Link to="/report/sales">Sales Report</Link>, "/report/sales" ,<AiOutlineLineChart/>),
    getItem(<Link to="/calendar">Calendar</Link>, "/calendar" ,<FaRegCalendarAlt/>),
    getItem(<Link to="/ticketing">Tickets</Link>, "/ticketing" ,<BiMessage/>)
  ]
  export const GovtAgentSidebar = [
    getItem(<Link to="/">Dashboard</Link>, "/", <AiFillPieChart />),
    getItem(<Link to="/nylon/management">Nylon Serial Management</Link>, "/nylon/management",<HiOutlineShoppingBag/>),
    getItem(<Link to="/revenue">Revenue Generated</Link>, "/revenue",<FaRegMoneyBillAlt/>),
    getItem(<Link to="/report/sales">Sales Report</Link>, "/report/sales" ,<AiOutlineLineChart/>),
    getItem(<Link to="/waste/collection">Waste collection</Link>, "/waste/collection",<RiDeleteBin5Line/>),
    getItem(<Link to="/calendar">Calendar</Link>, "/calendar" ,<FaRegCalendarAlt/>),
    getItem(<Link to="/ticketing">Tickets</Link>, "/ticketing" ,<BiMessage/>)
  ]
  export const SubadminSidebar = [
    getItem(<Link to="/">Dashboard</Link>, "/", <AiFillPieChart />),
    getItem(<span>User Management</span>, "user", <FaRegUser />, [
      getItem(<Link to="/vendors">Vendor</Link>, "/vendors"),
      getItem(<Link to="/waste-management-agency">Waste Management Agency</Link>, "/waste-management-agency"),
      getItem(<Link to="/nylon-production-company">Nylon Production Company</Link>, "/nylon-production-company"),
      getItem(<Link to="/state-govt-agency">State Government Agency</Link>, "/state-govt-agency"),
      getItem(<Link to="/enforcement-team">Enforcement Team</Link>, "/enforcement-team"),
    ]),
    getItem(<Link to="/nylon/management">Nylon Management</Link>, "/nylon/management",<HiOutlineShoppingBag/>),
    getItem(<Link to="/waste/collection">Waste collection</Link>, "/waste/collection",<RiDeleteBin5Line/>),
    getItem(<Link to="/revenue">Revenue</Link>, "/revenue", <PiMoneyDuotone />),
    getItem(<Link to="/invoice">Invoices</Link>, "/invoice",<PiScrollDuotone/>),
    getItem(<Link to="/calendar">Calendar</Link>, "/calendar" ,<FaRegCalendarAlt/>),
    getItem(<Link to="/ticketing">Tickets</Link>, "/ticketing" ,<BiMessage/>)
  ]