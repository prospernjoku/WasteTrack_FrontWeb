import React from 'react'
import {TbBookDownload} from 'react-icons/tb';

function RecentWithdrawls() {
  return (
    <div className="outer-card my-3">
      <div className="card-header border-0">
        <p>Recent Withdrawls </p>
      </div>
      <div className="card-body">
        <div className=" dash-Bordered-Card">
          <div className="round-icon icon-blue">
            <TbBookDownload />
          </div>
          <div className="">
            <p className="mb-0 gray-color">Enumeral Waste Solutions Limited</p>
            <p className="mb-0 blue-color fw-bold fs-40">₦900.00</p>
          </div>
        </div>
        <div className=" dash-Bordered-Card">
          <div className="round-icon icon-yellow">
          <TbBookDownload />
          </div>
          <div className="">
            <p className="mb-0 gray-color">Enumeral Waste Solutions Limited</p>
            <p className="mb-0 yellow-color fw-bold fs-40">₦900.00</p>
          </div>
        </div>
        <div className="dash-Bordered-Card">
          <div className="round-icon icon-primary">
            <TbBookDownload />
          </div>
          <div className="">
            <p className="mb-0 gray-color">Enumeral Waste Solutions Limited</p>
            <p className="mb-0 primary-color fw-bold fs-40">₦900.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentWithdrawls