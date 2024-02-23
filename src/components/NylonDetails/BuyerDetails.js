import React from "react";
import { FaRegUser } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";

function BuyerDetails() {
  return (
    <div className="panel-card">
      <div className="card-header">
        <p>Buyer Details</p>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-auto">
            <FaRegUser className="primary-color fs-5"/>
          </div>
          <div className="col">
            <p>Ralph Edwards</p>
          </div>
        </div>
        <div className="row">
          <div className="col-auto">
            <BiPhone className="primary-color fs-5"/>
          </div>
          <div className="col">
            <p>+234 90-461-4000</p>
          </div>
        </div>
        <div className="row">
          <div className="col-auto">
            <LuMapPin className="primary-color fs-5"/>
          </div>
          <div className="col">
            <p>Lorem ipsum dolor sit amet. Nam ducimus repellendus At voluptatem dignissimos in tenetur obcaecati</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerDetails;
