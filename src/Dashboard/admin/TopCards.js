import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
function TopCards() {
  return (
        <div className="row">
          <div className="col-md-4 my-2">
            <div className="dashboard-topCard">
              <div className="dashboardTop-cardRight">
                <div className="side-dot"></div>
                <div className="side-dot"></div>
                <div className="side-dot"></div>
              </div>
              <div>
                <p className="fs-16 fw-500 mb-0">Monthly Balance</p>
                <p className="fw-bold fs-30 fs-lg primary-color mb-0">₦37,900</p>
                <p className="fs-14">
                  <span className="primary-color fw-500">
                    <BiUpArrowAlt />
                    37.8%
                  </span>
                  This month
                </p>
              </div>
              <div className="dashTopCard-img">
                <img src="/images/icons/balance.png" alt="balanceIcon" />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="dashboard-topCard">
              <div className="dashboardTop-cardLeft">
                <div className="side-dot"></div>
                <div className="side-dot"></div>
                <div className="side-dot"></div>
              </div>
              <div className="dashboardTop-cardRight">
                <div className="side-dot"></div>
                <div className="side-dot"></div>
                <div className="side-dot"></div>
              </div>
              <div>
                <p className="fs-16 fw-500 mb-0">Revenue Earned</p>
                <p className="fw-bold fs-30 primary-color mb-0">₦29,700</p>
                <p className="fs-14">
                  <span className="primary-color fw-500">
                    <BiUpArrowAlt />
                    37.8%
                  </span>
                  This month
                </p>
              </div>
              <div className="dashTopCard-img">
                <img src="/images/icons/balance.png" alt="revenueEarnIcon" />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="dashboard-topCard">
              <div className="dashboardTop-cardLeft">
                <div className="side-dot"></div>
                <div className="side-dot"></div>
                <div className="side-dot"></div>
              </div>
              <div>
                <p className="fs-16 fw-500 mb-0">Revenue Shared</p>
                <p className="fw-bold fs-30 primary-color mb-0">₦15,900</p>
                <p className="fs-14">
                  <span className="primary-color fw-500">
                    <BiUpArrowAlt />
                    37.8%
                  </span>
                  This month
                </p>
              </div>
              <div className="dashTopCard-img">
                <img src="/images/icons/balance.png" alt="revenueSharedIcon" />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="dashboard-topCard">
              <div className="dashboardTop-cardRight">
                <div className="side-dot"></div>
                <div className="side-dot"></div>
                <div className="side-dot"></div>
              </div>
              <div>
                <p className="fs-16 fw-500 mb-0">Pending Orders</p>
                <p className="fw-bold fs-30 primary-color mb-0">50</p>
                <Link to="/" className="fs-14 heading-color">
                  View entire list
                </Link>
              </div>
              <div className="dashTopCard-img">
                <img src="/images/icons/bagIcon.png" alt="bagIcon" />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="dashboard-topCard">
              <div className="dashboardTop-cardLeft">
                <div className="side-dot"></div>
                <div className="side-dot"></div>
                <div className="side-dot"></div>
              </div>
              <div className="dashboardTop-cardRight">
                <div className="side-dot"></div>
                <div className="side-dot"></div>
                <div className="side-dot"></div>
              </div>
              <div>
                <p className="fs-16 fw-500 mb-0">Vendor Requests</p>
                <p className="fw-bold fs-30 primary-color mb-0">60</p>
                <Link to="/" className="fs-14 heading-color">
                  View entire list
                </Link>
              </div>
              <div className="dashTopCard-img">
                <img src="/images/icons/userIcon.svg" alt="userIcon" />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="dashboard-topCard">
              <div className="dashboardTop-cardLeft">
                <div className="side-dot"></div>
                <div className="side-dot"></div>
                <div className="side-dot"></div>
              </div>
              <div>
                <p className="fs-16 fw-500 mb-0">Nylon Left</p>
                <p className="fw-bold fs-30 primary-color mb-0">50</p>
                <Link to="/" className="fs-14 heading-color">
                  View entire list
                </Link>
              </div>
              <div className="dashTopCard-img">
                <img src="/images/icons/bagIcon.png" alt="NylonLeftIcon" />
              </div>
            </div>
          </div>
        </div>
    
  );
}

export default TopCards;
