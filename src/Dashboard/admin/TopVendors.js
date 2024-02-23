import React from "react";

function TopVendors() {
  return (
    <div className="outer-card my-3">
      <div className="card-header">
        <p>Our Top Vendors</p>
      </div>
      <div className="card-body">
      {
        [...Array(4)].map((element,index)=>{
         return <div key={index + 1} className="row my-1">
          <div className="col-2">
            <img src="/images/user.png" alt="userPng" />
          </div>
          <div className="col ms-3">
            <p className="fw-500 mb-1 fs-18">Enumeral Waste Solutions Limited</p>
            <p className="fs-16"><span className="gray-color">Vendor Code :</span> 123456</p>
          </div>
        </div>
        })
      }
      </div>
    </div>
  );
}

export default TopVendors;
