import React from "react";
import { IoBagCheckOutline } from "react-icons/io5";
import { PiCurrencyNgnDuotone } from "react-icons/pi";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";

function BuyNylon() {
  const breadcrumbItems = [
    { label: "Order Management" },
    { label: "Buy Nylon" },
  ];
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-md-6 col-lg-4 col-xxl-3">
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
      </div>
      <div className="row my-3">
        <div className="col-md-6 col-lg-4 col-xxl-3">
          <div className="nylonGeneration-bottom h-100">
            <p className="fs-22 fw-500 heading-color"> Nylon Rolls</p>
            <div className="text-center">
              <img
                src="/images/nylonBag.png"
                className="img-fluid"
                alt="nylonBag"
              />
            </div>
            <div className="mt-4">
              <div className="row">
                <div className="col-md-12">
                  <p className="fw-bold heading-color fs-22 mb-0">
                    <PiCurrencyNgnDuotone className="mb-1" /> 758.00
                  </p>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-auto ">
                  <span className="gray-color fs-18 ">Enter Quantity</span>
                </div>
                <div className="col">
                  <input className="custom-input w-100" value={50} />
                </div>
              </div>
              <button
                className="primary-btn w-100 mb-3 mt-3"
                onClick={() => {
                  navigate("/order/checkout");
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyNylon;
