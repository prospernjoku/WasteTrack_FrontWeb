import React from "react";

function Notification() {
  return (
    <div className="row">
      <div className="col-md-12">
      {
        [...Array(10)].map((element,index)=>{
          return  <div key={index + 1} className="row notification-row mb-3">
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
              Lorem ipsum dolor sit amet. Nam ducimus repellendus At voluptatem
              dignissimos in tenetur obcaecati non iusto cupiditate sit
              molestias unde ut vero provident....
            </p>
            <p className="mb-0 fs-14 gray-light">15 mins ago</p>
          </div>
        </div>
        })
      }
       
      </div>
    </div>
  );
}

export default Notification;
