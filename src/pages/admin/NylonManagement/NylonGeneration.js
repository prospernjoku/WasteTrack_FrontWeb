import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { IoBagCheckOutline } from "react-icons/io5";
import { PiCurrencyNgnDuotone, PiMoneyFill } from "react-icons/pi";

function NylonGeneration() {
  const breadcrumbItems = [
    { label: "Nylon Management" },
    { label: "Nylon Generation" },
  ];
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-md-6 col-xl-4 my-2">
          <div className="nylonGeneration-top h-100">
            <div className="nylonGeneration-topLeft">
              <p>50</p>
              <p>Nylon Rolls Available</p>
            </div>
            <div className="nylonGeneration-topRight">
              <IoBagCheckOutline className="bag-icon" />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-4 my-2">
          <div className="nylonGeneration-top h-100">
            <div className="nylonGeneration-topLeft">
              <p>
                <PiCurrencyNgnDuotone className="mb-3" />
                500
              </p>
              <p>Current Nylon Price</p>
            </div>
            <div className="nylonGeneration-topRight">
              <PiMoneyFill />
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-md-6 col-xl-4 my-2">
          <div className="nylonGeneration-bottom h-100">
            <p className="fs-22 fw-500 heading-color">Generate Nylon Rolls</p>
            <div className="text-center">
              <img
                src="/images/nylonBag.png"
                className="img-fluid"
                alt="blackBag"
              />
            </div>
            <div className="mt-4">
              <div className="row align-items-center">
                <div className="col-auto ">
                  <span className="gray-color fs-18 ">Enter Quantity</span>
                </div>
                <div className="col">
                  <input className="custom-input w-100" defaultValue={50} />
                </div>
              </div>
              <button className="primary-btn w-100 mb-3 mt-3">Generate</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-4  my-2">
          <div className="nylonGeneration-bottom h-100">
            <p className="fs-22 fw-500 heading-color">Generate Nylon Rolls</p>
            <div className="text-center">
              <img
                src="/images/nairaCurrency.png"
                className="img-fluid"
                alt="blackBag"
              />
            </div>
            <div className="mt-4">
              <div className="row align-items-center">
                <div className="col-auto ">
                  <span className="gray-color fs-18 ">Set Nylon Price</span>
                </div>
                <div className="col">
                  <div className="setPrice-input">
                    <span>
                      <PiCurrencyNgnDuotone />
                    </span>
                    <input className="w-100" defaultValue={50} />
                  </div>
                </div>
              </div>
              <button className="primary-btn w-100 mb-3 mt-3">Set</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NylonGeneration;
