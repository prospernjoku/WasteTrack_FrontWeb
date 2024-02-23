import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Select } from "antd";
import { BiSolidDownArrow, BiFilterAlt } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function WithdrawlRequest() {
  const breadcrumbItems = [{ label: "Withdrawl Request" }];

  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-md my-2">
          <div className="top-details-card">
            <p className="fs-20 fw-500 heading-color mb-0">Total Request</p>
            <div className="d-flex align-items-center justify-content-between">
              <p className="fs-45 fw-500 mb-0 heading-color">50</p>
              <div className="top-card-icon">
                <img src="/images/icons/pending.svg" alt="pending-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md my-2">
          <div className="top-details-card">
            <p className="fs-20 fw-500 heading-color mb-0">Request Pending</p>
            <div className="d-flex align-items-center justify-content-between">
              <p className="fs-45 fw-500 mb-0 heading-color">10</p>
              <div className="top-card-icon">
                <img src="/images/icons/completed.svg" alt="completed-icon" />
              </div>
            </div>
          </div>
        </div> 
        <div className="col-md my-2">
          <div className="top-details-card">
            <p className="fs-20 fw-500 heading-color mb-0">Request Approved</p>
            <div className="d-flex align-items-center justify-content-between">
              <p className="fs-45 fw-500 mb-0 heading-color">35</p>
              <div className="top-card-icon">
                <img src="/images/icons/confirmed.svg" alt="confirmed-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md my-2">
          <div className="top-details-card">
            <p className="fs-20 fw-500 heading-color mb-0">Request Rejected</p>
            <div className="d-flex align-items-center justify-content-between">
              <p className="fs-45 fw-500 mb-0 heading-color">5</p>
              <div className="top-card-icon">
                <img src="/images/icons/canceled.svg" alt="canceled-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="panel-card my-3">
        <div className="card-body">
          <div className="row my-3">
            <div className="col-md-12 d-md-flex justify-content-end tableTop-wrapper">
              <div className="search-input-container m-2">
                <span className="search-icon">
                  <FiSearch className="primary-color" />
                </span>
                <input
                  type="text"
                  placeholder="Search here..."
                  className="search-input"
                />
              </div>
              <div className="filter-selector m-2">
                <span className="filter-icon">
                  <BiFilterAlt className="primary-color" />
                </span>
                <Select
                  suffixIcon={<BiSolidDownArrow className="primary-color" />}
                  placeholder="Filter By"
                  options={[
                    {
                      value: "name",
                      label: "Name",
                    },
                    {
                      value: "email",
                      label: "Email",
                    },
                    {
                      value: "designation",
                      label: "Designation",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 my-3">
              <div className="withdrawl-request-card withdrawl-pending">
                <div className="card-header">
                  <p>Request Pending (10)</p>
                </div>
                <div className="card-body">
                  <div className="card-item my-2">
                    <div className="d-flex justify-content-between">
                      <p className="gray-color mb-3">
                        Request ID :
                        <span className="heading-color">#1234567890</span>
                      </p>
                      <p className="gray-color mb-3">
                        Amount : <span className="heading-color">₦456</span>
                      </p>
                    </div>
                    <div>
                      <p className=" gray-color mb-3">
                        Vendor Code :
                        <span className="heading-color mb-0">123456</span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="fw-500 mb-0">Enumeral Solutions Limited</p>
                      <Link
                        to="/withdrawl/details/id"
                        className="primary-color fw-500 ws-nowrap"
                      >
                        View Details <FaAngleRight className="mb-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="card-item my-2">
                    <div className="d-flex justify-content-between">
                      <p className="gray-color mb-3">
                        Request ID :
                        <span className="heading-color">#1234567890</span>
                      </p>
                      <p className="gray-color mb-3">
                        Amount : <span className="heading-color">₦456</span>
                      </p>
                    </div>
                    <div>
                      <p className=" gray-color mb-3">
                        Vendor Code :
                        <span className="heading-color mb-0">123456</span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="fw-500 mb-0">Enumeral Solutions Limited</p>
                      <Link
                        to="/withdrawl/details/id"
                        className="primary-color fw-500 ws-nowrap"
                      >
                        View Details <FaAngleRight className="mb-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="card-item my-2">
                    <div className="d-flex justify-content-between">
                      <p className="gray-color mb-3">
                        Request ID :
                        <span className="heading-color">#1234567890</span>
                      </p>
                      <p className="gray-color mb-3">
                        Amount : <span className="heading-color">₦456</span>
                      </p>
                    </div>
                    <div>
                      <p className=" gray-color mb-3">
                        Vendor Code :
                        <span className="heading-color mb-0">123456</span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="fw-500 mb-0">Enumeral Solutions Limited</p>
                      <Link
                        to="/withdrawl/details/id"
                        className="primary-color fw-500 ws-nowrap"
                      >
                        View Details <FaAngleRight className="mb-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="card-item my-2">
                    <div className="d-flex justify-content-between">
                      <p className="gray-color mb-3">
                        Request ID :
                        <span className="heading-color">#1234567890</span>
                      </p>
                      <p className="gray-color mb-3">
                        Amount : <span className="heading-color">₦456</span>
                      </p>
                    </div>
                    <div>
                      <p className=" gray-color mb-3">
                        Vendor Code :
                        <span className="heading-color mb-0">123456</span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="fw-500 mb-0">Enumeral Solutions Limited</p>
                      <Link
                        to="/withdrawl/details/id"
                        className="primary-color fw-500 ws-nowrap"
                      >
                        View Details <FaAngleRight className="mb-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 my-3">
            <div className="withdrawl-request-card withdrawl-approved">
                <div className="card-header">
                  <p>Request Pending (35)</p>
                </div>
                <div className="card-body">
                  <div className="card-item my-2">
                    <div className="d-flex justify-content-between">
                      <p className="gray-color mb-3">
                        Request ID :
                        <span className="heading-color">#1234567890</span>
                      </p>
                      <p className="gray-color mb-3">
                        Amount : <span className="heading-color">₦456</span>
                      </p>
                    </div>
                    <div>
                      <p className=" gray-color mb-3">
                        Vendor Code :
                        <span className="heading-color mb-0">123456</span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="fw-500 mb-0">Enumeral Solutions Limited</p>
                      <Link
                        to="/withdrawl/details/id"
                        className="primary-color fw-500 ws-nowrap"
                      >
                        View Details <FaAngleRight className="mb-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="card-item my-2">
                    <div className="d-flex justify-content-between">
                      <p className="gray-color mb-3">
                        Request ID :
                        <span className="heading-color">#1234567890</span>
                      </p>
                      <p className="gray-color mb-3">
                        Amount : <span className="heading-color">₦456</span>
                      </p>
                    </div>
                    <div>
                      <p className=" gray-color mb-3">
                        Vendor Code :
                        <span className="heading-color mb-0">123456</span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="fw-500 mb-0">Enumeral Solutions Limited</p>
                      <Link
                        to="/withdrawl/details/id"
                        className="primary-color fw-500 ws-nowrap"
                      >
                        View Details <FaAngleRight className="mb-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="card-item my-2">
                    <div className="d-flex justify-content-between">
                      <p className="gray-color mb-3">
                        Request ID :
                        <span className="heading-color">#1234567890</span>
                      </p>
                      <p className="gray-color mb-3">
                        Amount : <span className="heading-color">₦456</span>
                      </p>
                    </div>
                    <div>
                      <p className=" gray-color mb-3">
                        Vendor Code :
                        <span className="heading-color mb-0">123456</span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="fw-500 mb-0">Enumeral Solutions Limited</p>
                      <Link
                        to="/withdrawl/details/id"
                        className="primary-color fw-500 ws-nowrap"
                      >
                        View Details <FaAngleRight className="mb-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="card-item my-2">
                    <div className="d-flex justify-content-between">
                      <p className="gray-color mb-3">
                        Request ID :
                        <span className="heading-color">#1234567890</span>
                      </p>
                      <p className="gray-color mb-3">
                        Amount : <span className="heading-color">₦456</span>
                      </p>
                    </div>
                    <div>
                      <p className=" gray-color mb-3">
                        Vendor Code :
                        <span className="heading-color mb-0">123456</span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="fw-500 mb-0">Enumeral Solutions Limited</p>
                      <Link
                        to="/withdrawl/details/id"
                        className="primary-color fw-500 ws-nowrap"
                      >
                        View Details <FaAngleRight className="mb-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 my-3">
            <div className="withdrawl-request-card withdrawl-rejected">
                <div className="card-header">
                  <p>Request Pending (5)</p>
                </div>
                <div className="card-body">
                  <div className="card-item my-2">
                    <div className="d-flex justify-content-between">
                      <p className="gray-color mb-3">
                        Request ID :
                        <span className="heading-color">#1234567890</span>
                      </p>
                      <p className="gray-color mb-3">
                        Amount : <span className="heading-color">₦456</span>
                      </p>
                    </div>
                    <div>
                      <p className=" gray-color mb-3">
                        Vendor Code :
                        <span className="heading-color mb-0">123456</span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="fw-500 mb-0">Enumeral Solutions Limited</p>
                      <Link
                        to="/withdrawl/details/id"
                        className="primary-color fw-500 ws-nowrap"
                      >
                        View Details <FaAngleRight className="mb-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="card-item my-2">
                    <div className="d-flex justify-content-between">
                      <p className="gray-color mb-3">
                        Request ID :
                        <span className="heading-color">#1234567890</span>
                      </p>
                      <p className="gray-color mb-3">
                        Amount : <span className="heading-color">₦456</span>
                      </p>
                    </div>
                    <div>
                      <p className=" gray-color mb-3">
                        Vendor Code :
                        <span className="heading-color mb-0">123456</span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="fw-500 mb-0">Enumeral Solutions Limited</p>
                      <Link
                        to="/withdrawl/details/id"
                        className="primary-color fw-500 ws-nowrap"
                      >
                        View Details <FaAngleRight className="mb-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="card-item my-2">
                    <div className="d-flex justify-content-between">
                      <p className="gray-color mb-3">
                        Request ID :
                        <span className="heading-color">#1234567890</span>
                      </p>
                      <p className="gray-color mb-3">
                        Amount : <span className="heading-color">₦456</span>
                      </p>
                    </div>
                    <div>
                      <p className=" gray-color mb-3">
                        Vendor Code :
                        <span className="heading-color mb-0">123456</span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="fw-500 mb-0">Enumeral Solutions Limited</p>
                      <Link
                        to="/withdrawl/details/id"
                        className="primary-color fw-500 ws-nowrap"
                      >
                        View Details <FaAngleRight className="mb-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="card-item my-2">
                    <div className="d-flex justify-content-between">
                      <p className="gray-color mb-3">
                        Request ID :
                        <span className="heading-color">#1234567890</span>
                      </p>
                      <p className="gray-color mb-3">
                        Amount : <span className="heading-color">₦456</span>
                      </p>
                    </div>
                    <div>
                      <p className=" gray-color mb-3">
                        Vendor Code :
                        <span className="heading-color mb-0">123456</span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="fw-500 mb-0">Enumeral Solutions Limited</p>
                      <Link
                        to="/withdrawl/details/id"
                        className="primary-color fw-500 ws-nowrap"
                      >
                        View Details <FaAngleRight className="mb-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithdrawlRequest;
