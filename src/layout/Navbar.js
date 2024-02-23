import React from "react";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  HiOutlineBars3BottomRight,
  HiOutlineBars3BottomLeft,
} from "react-icons/hi2";
import {useSelector} from 'react-redux';
function Navbar({ collapsed, toggleCollapsed }) {

  const userInfo = useSelector((state => state.auth.user))

  return (
    <nav className="top-navbar">
      <div className="d-flex align-items-center">
        <button className="side-closebtn" onClick={() => toggleCollapsed()}>
          {collapsed ? (
            <HiOutlineBars3BottomLeft />
          ) : (
            <HiOutlineBars3BottomRight />
          )}
        </button>
        {/* <p className="mb-0 d-none-sm heading-color fs-22 ms-2 fw-500">Dashboard</p> */}
      </div>
      <div className="navbar-right">
        <div className="notification-icon">
          <Link to="/profile/notification">
            <IoMdNotificationsOutline />
          </Link>
        </div>
        <div className="nav-profile ms-3">
          <Link to="/profile">
          {
            userInfo?.profile_img ? <img src={`${process.env.REACT_APP_API_BASE_URL + "/" +userInfo?.profile_img}`} alt="userImg" className="img-fluid"/>  : <img src="/images/user.png" alt="userImg" className="img-fluid" />
          }
          </Link>
          <div className="ms-3 d-none-sm">
            <p className="mb-0 heading-color fw-500 fs-16">{userInfo?.firstname ?? ''} {userInfo?.lastname ?? ''}</p>
            <p className="mb-0 gray-color fs-14">{userInfo?.designation ?? ''}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
