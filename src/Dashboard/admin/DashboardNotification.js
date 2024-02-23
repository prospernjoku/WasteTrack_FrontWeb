import React from "react";

function DashboardNotification() {
  return (
    <div className="panel-card my-3 border-radius-16 py-2 px-1">
    <div className="card-header border-0">
        <p className="fw-600">Recent Notifications</p>
    </div>
      <div className="card-body p-0">
        {[...Array(4)].map((element, index) => {
          return (
            <div key={index + 1} className="row mb-3 notification-row">
              <div className="col-auto">
                <div className="notification-icon">
                  <span>SA</span>
                </div>
              </div>
              <div className="col py-2">
                <p className="mb-1 fs-18 fw-500 heading-color">
                  Nylon Bag Purchase Request
                </p>
                <p className="mb-1 fs-16 gray-color text-justify">
                  Lorem ipsum dolor sit amet. Nam ducimus repellendus At
                  cupiditate sit vero provident....
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DashboardNotification;
