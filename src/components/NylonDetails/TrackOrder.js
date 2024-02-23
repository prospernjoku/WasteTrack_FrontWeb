import React from "react";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { BsCheckLg, BsTruck } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
function TrackOrder() {
  return (
    <div className="panel-card">
      <div className="card-header">
        <p>Track Order</p>
      </div>
      <div className="card-body py-5">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center">
              <div className="step-icon">
                <MdOutlineDesktopWindows className="fs-22" />
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="fw-500 heading-color fs-18 mb-2">Nylon Ordered</p>
              <p className="fw-500 heading-color">5 Sept 2023, 12:45 PM</p>
            </div>
          </div>
          <div className="col-md">
            <div className="d-flex justify-content-center">
              <div className="step-icon">
                <BsCheckLg className="fs-22" />
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="fw-500 heading-color fs-18 mb-2">Nylon Generated</p>
              <p className="fw-500 heading-color">5 Sept 2023, 12:45 PM</p>
            </div>
          </div>
          <div className="col-md">
            <div className="d-flex justify-content-center">
              <div className="step-icon">
                <FaRegUser className="fs-22" />
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="fw-500 heading-color fs-18 mb-2">Nylon Generated</p>
              <p className="fw-500 heading-color">5 Sept 2023, 12:45 PM</p>
            </div>
          </div>
          <div className="col-md">
            <div className="d-flex justify-content-center">
              <div className="step-icon">
                <BsTruck className="fs-22" />
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="fw-500 heading-color fs-18 mb-2">Nylon Generated</p>
              <p className="fw-500 heading-color">5 Sept 2023, 12:45 PM</p>
            </div>
          </div>
          <div className="col-md">
            <div className="d-flex justify-content-center">
              <div className="step-icon">
                <FiBox className="fs-22" />
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="fw-500 heading-color fs-18 mb-2">Nylon Generated</p>
              <p className="fw-500 heading-color">5 Sept 2023, 12:45 PM</p>
            </div>
          </div>
        </div>

        {/* <Steps
          current={0}
          labelPlacement="vertical"
          items={[
            {
              icon: (
                <div className="rounded-icon">
                  <MdOutlineDesktopWindows className="fs-4" />
                </div>
              ),
              title: <p> Nylon Ordered</p>,
              description: <p>5 Sept 2023, 12:45 PM</p>,
            },
            {
              icon: (
                <div className="rounded-icon">
                  <BsCheckLg className="fs-4" />
                </div>
              ),
              title: <p>Nylon Generated</p>,
              description: <p>5 Sept 2023, 12:45 PM</p>,
            },
            {
              icon: (
                <div className="rounded-icon">
                  <FaRegUser className="fs-4" />
                </div>
              ),
              title: <p>Nylon Assigned</p>,
              description: <p>5 Sept 2023, 12:45 PM</p>,
            },
            {
              icon: (
                <div className="rounded-icon">
                  <BsTruck className="fs-4" />
                </div>
              ),
              title: <p>Nylon Picked Up</p>,
              description: <p>5 Sept 2023, 12:45 PM</p>,
            },
            {
              icon: (
                <div className="rounded-icon">
                  <FiBox className="fs-4" />
                </div>
              ),
              title: <p>Nylon Sold By Vendor</p>,
              description: <p>5 Sept 2023, 12:45 PM</p>,
            },
          ]}
        ></Steps> */}
      </div>
    </div>
  );
}

export default TrackOrder;
