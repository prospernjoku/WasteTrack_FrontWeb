import React , { useState } from "react";
import { Menu } from "antd";
import {
  GovtAgentSidebar,
  SubadminSidebar,
  adminSidebar,
  vendorSidebar,
  vendorStaffSidebar,
  wasteManagementAgencySidebar,
  wasteManagementStaffSidebar,
} from "../sidebarData";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { ActionTypes } from "../redux/constants/ActionTypes";
import { useDispatch, useSelector } from "react-redux";

function Sidebar({ collapsed, isMobile, toggleCollapsed }) {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [openKeys, setOpenKeys] = useState([]);

  const handleOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (!latestOpenKey) {
      setOpenKeys([]);
    } else {
      setOpenKeys([latestOpenKey]);
    }
  };

  const userInfo = useSelector((state)=>state.auth.user)

  let items = [];

  switch (userInfo?.role) {
    case "admin":
      items = adminSidebar;
      break;
    case "subadmin":
      items = SubadminSidebar;
      break;
    case "vendor":
      items = vendorSidebar;
      break;
    case "vendorStaff":
      items = vendorStaffSidebar;
      break;
    case "govtAgency":
      items = GovtAgentSidebar;
      break;
    case "wasteMgmtStaff":
      items = wasteManagementStaffSidebar;
      break;
    case "wasteMgmtAgency": // WORKING OF WASTE MANAGEMENT AND GOVT AGENT ARE ALMOST SAME
      items = wasteManagementAgencySidebar;
      break;
  }
  const handleOnMenuSelect = ()=>{
    if(isMobile){
      toggleCollapsed(true)
    }
  }
  const handleLogout = ()=>{
    if (window.confirm("Are You sure to logout")) {
      localStorage.clear();
      dispatch({ type: ActionTypes.USER_LOGOUT });
      navigate("/login");
    }
  }
  return (
    <aside
      className={`sidebar ${
        collapsed ? (isMobile ? "sidebar-close" : "sidebar-collapse") : ""
      }`}
    >
      <div className="sidebar-logo d-flex align-items-center justify-content-between overflow-hidden">
      <div className="d-flex justify-conent-start align-items-center">
      <img src="/images/logo.png" alt="Logo" className="img-fluid sidebar-logo-img" />
        <p className="primary-color fs-22 ms-2 fw-500 mb-0">
          {collapsed && !isMobile ? "" : "WasteTrack"}
        </p>
      </div>
       
        {isMobile ? (
          <button
            className="btn"
            onClick={() => {
              toggleCollapsed(!collapsed);
            }}
          >
            <AiOutlineClose className="fs-22" />
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="sidebar-menu">
        <Menu
          selectedKeys={[location.pathname]}
          defaultSelectedKeys={["/"]}
          mode="inline"
          onClick={handleOnMenuSelect}
          items={items ?? []}
          inlineCollapsed={isMobile ? false : collapsed}
          onOpenChange={handleOpenChange}
          openKeys={openKeys}
        />
      </div>
      <div className="signout-btn">
        <button onClick={()=>handleLogout()} > 
          <FiLogOut className="me-2 fs-22 mb-1" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
