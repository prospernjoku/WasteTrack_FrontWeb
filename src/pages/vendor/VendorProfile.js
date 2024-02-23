import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FiLock ,FiLogOut} from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import { RiBankFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../../redux/constants/ActionTypes";

function VendorProfile() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const activeKey = location.pathname.split("/")[2] ?? "";
  const tabMenu = [
    {
      key: 1,
      label: "Edit Profile",
      url: "/profile",
      icon: <FaRegUser className="mb-1 me-2" />,
    },
    {
      key: 2,
      label: "Change Password",
      url: "/profile/change-password",
      icon: <FiLock className="mb-1 me-2 fs-5" />,
    },
    {
      key: 3,
      label: "Notification",
      url: "/profile/notification",
      icon: <BiBell className="mb-1 me-2 fs-5" />,
    },
    {
      key: 3,
      label: "Bank Details",
      url: "/profile/bank-details",
      icon: <RiBankFill className="mb-1 me-2 fs-5" />,
    },
  ];
  const breadcrumbItems = [
    { label: "Profile", url: "/profile" },
    { label: activeKey ? `${activeKey}`.replace(/-/g, " ") : "Edit Profile" },
  ];
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="profile-layout">
        <div className="profile-tab-menu ">
          <ul>
            {tabMenu && tabMenu?.length > 0
              ? tabMenu.map((element, index) => {
                  return (
                    <li
                      key={index + 1}
                      className={
                        element?.url === location?.pathname ? "active" : ""
                      }
                    >
                      <Link to={element?.url}>
                        {element?.icon}
                        <span>{element?.label}</span>
                      </Link>
                    </li>
                  );
                })
              : ""}
              <li className="">
              <p
                className="red-color"
                onClick={() => {
                  if (window.confirm("Are You sure to logout")) {
                  localStorage.clear();
                  dispatch({ type: ActionTypes.USER_LOGOUT });
                  navigate("/login");
                  }
                }}
              >
                <FiLogOut className="fs-20 me-2" /> Logout
              </p>
            </li>
          </ul>
        </div>
        <div className="profile-tab-content scroll-content">
          <div className="profile-tab-content pb-3">{<Outlet />}</div>
        </div>
      </div>
    </div>
  );
}

export default VendorProfile;
