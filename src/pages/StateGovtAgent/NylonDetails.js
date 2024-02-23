import React, { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { IoGlobeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RxEnvelopeClosed } from "react-icons/rx";
import { BiPhone } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";
import SerialDetails from "../../components/NylonDetails/SerialDetails";
import TrackOrder from "../../components/NylonDetails/TrackOrder";
import BuyerDetails from "../../components/NylonDetails/BuyerDetails";

function ViewAssignedNylonDetails() {
  const [activeTab , setActiveTab] = useState("serialDetails")
  const breadcrumbItems = [
    { label: "Nylon Management", url : '/nylon/management' },
    { label: "Nylon Details" }
  ];

  const renderComponents = ()=>{
    switch(activeTab){
      case "serialDetails":
        return <SerialDetails/>
      case "trackOrder" :
        return <TrackOrder/>
      case "buyerDetails" :
        return <BuyerDetails/>
      default :
        return <SerialDetails/>
    }
  }
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-md-12">
          <p className="fs-18 fw-500 heading-color">
            Batch Number :
            <span className="primary-color fs-22 fw-bold">7478939857564</span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="panel-card">
            <div className="card-header">
              <p className="fs-18 heading-color">Vendor Details</p>
            </div>
            <div className="card-body">
              <p className="fs-18">
                Vendor code :
                <span className="primary-color fw-500 ms-2">123456</span>
              </p>
              <div className="row justify-content-between">
                <div className="col col-lg-auto">
                  <p className="fs-18 fw-500 heading-color text-decoration-underline ">
                    Enumeral Waste Solutions Limited
                  </p>
                  <p className="fs-18 fw-500 heading-color">
                    <IoGlobeOutline className="primary-color fs-4 me-2" />
                    website.com
                  </p>
                </div>
                <div className="col-auto">
                  <ul className="row list-unstyled justify-content-between mb-0">
                    <li className="col-auto">
                      <p className="fs-16 fw-500 heading-color">
                        <FaRegUser className="primary-color fs-5 me-2" />
                        Ralph Edwards
                      </p>
                    </li>
                    <li className="col-auto">
                      <p className="fs-16 fw-500 heading-color">
                        <RxEnvelopeClosed className="primary-color fs-5 me-2" />
                        vendor@gmail.com
                      </p>
                    </li>
                    <li className="col-auto">
                      <p className="fs-16 fw-500 heading-color">
                        <BiPhone className="primary-color fs-5 me-2" /> +234
                        90-461-4000
                      </p>
                    </li>
                  </ul>
                  <div className="d-flex align-items-start">
                    <span>
                      <LuMapPin className="fs-2 primary-color text-danger me-2" />
                    </span>
                    <p className="text-justify mb-0 fw-500 heading-color">
                      Lorem ipsum dolor sit amet. Nam ducimus repellendus At
                      voluptatem dignissimos in tenetur obcaecati
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tabs-container">
            <ul className="tabs">
              <li className={`${activeTab==="serialDetails" ? 'active' : ''} tab`} onClick={()=>{setActiveTab("serialDetails")}}>Serial Details</li>
              <li className={`${activeTab==="trackOrder" ? 'active' : ''} tab`} onClick={()=>{setActiveTab("trackOrder")}}>Track Order</li>
              <li className={`${activeTab==="buyerDetails" ? 'active' : ''} tab`} onClick={()=>{setActiveTab("buyerDetails")}}>Buyer Details</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mb-3">
        {renderComponents()}
        </div>
      </div>
    </div>
  );
}

export default ViewAssignedNylonDetails;
