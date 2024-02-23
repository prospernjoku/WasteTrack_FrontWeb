import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BiPhone } from "react-icons/bi";
import { FaRegUser, FaAngleLeft } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";

function VendorTicketDetails() {
  const breadcrumbItems = [
    { label: "Ticketing", url: "/ticketing" },
    { label: "Ticket Details" },
  ];
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="row">
        <div className="col-md-12 col-lg-9 my-3">
          <div className="card-with-border">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <p className="fs-20 fw-500">
                    <FaAngleLeft className="mb-1" /> Ticket Id : #123456
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="fs-22 primary-color fw-500">
                    Withdrawl related issue
                  </p>
                </div>
              </div>

              <div className="ticket-container">
                <div className="message-box">
                  <div className="row">
                    <div className="col-auto">
                      <img
                        src="/images/user.png"
                        alt="user-img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col">
                      <div className="row justify-content-between">
                        <div className="col-auto">
                          <p className="fw-500 heading-color fw-500 fs-18">
                            Vendor Name
                          </p>
                        </div>
                        <div className="col-auto">
                          <p className="gray-color">11 Sept 2023, 03:62 PM</p>
                        </div>
                      </div>
                      <div className="row">
                        <p>Okay, Thanks </p>
                      </div>
                    </div>
                  </div>
                  <div className="row py-3 dashed-primary-topBorder">
                    <div className="col-auto">
                      <img
                        src="/images/user.png"
                        alt="user-img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col">
                      <div className="row justify-content-between">
                        <div className="col-auto">
                          <p className="fw-500 heading-color fw-500 fs-18">
                            Admin Name
                          </p>
                        </div>
                        <div className="col-auto">
                          <p className="gray-color">11 Sept 2023, 03:62 PM</p>
                        </div>
                      </div>
                      <div className="row">
                        <p className="text-justify">
                          Dear Vendor Name, I am writing to apologize for the
                          delay in processing your withdrawal request. We
                          understand that you need access to these funds, and we
                          are working hard to get them to you as soon as
                          possible. We have investigated the matter, and we have
                          determined that the delay was due to a technical
                          issue. This issue has been resolved, and your
                          withdrawal request is now being processed. We expect
                          that the funds will be deposited into your bank
                          account within [number of business days]. You will
                          receive an email notification once the funds have been
                          deposited. We appreciate your patience and
                          understanding. If you have any further questions or
                          concerns, please do not hesitate to contact us.
                          Sincerely, Admin Name
                        </p>
                      </div>
                      <div className="row">
                        <p className="text-justify">
                          Dear Vendor Name, I am writing to apologize for the
                          delay in processing your withdrawal request. We
                          understand that you need access to these funds, and we
                          are working hard to get them to you as soon as
                          possible. We have investigated the matter, and we have
                          determined that the delay was due to a technical
                          issue. This issue has been resolved, and your
                          withdrawal request is now being processed. We expect
                          that the funds will be deposited into your bank
                          account within [number of business days]. You will
                          receive an email notification once the funds have been
                          deposited. We appreciate your patience and
                          understanding. If you have any further questions or
                          concerns, please do not hesitate to contact us.
                          Sincerely, Admin Name
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row py-3 dashed-primary-topBorder">
                    <div className="col-auto">
                      <img
                        src="/images/user.png"
                        alt="user-img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col">
                      <div className="row justify-content-between">
                        <div className="col-auto">
                          <p className="fw-500 heading-color fw-500 fs-18">
                            Admin Name
                          </p>
                        </div>
                        <div className="col-auto">
                          <p className="gray-color">11 Sept 2023, 03:62 PM</p>
                        </div>
                      </div>
                      <div className="row">
                        <p className="text-justify">
                          Dear Vendor Name, I am writing to apologize for the
                          delay in processing your withdrawal request. We
                          understand that you need access to these funds, and we
                          are working hard to get them to you as soon as
                          possible. We have investigated the matter, and we have
                          determined that the delay was due to a technical
                          issue. This issue has been resolved, and your
                          withdrawal request is now being processed. We expect
                          that the funds will be deposited into your bank
                          account within [number of business days]. You will
                          receive an email notification once the funds have been
                          deposited. We appreciate your patience and
                          understanding. If you have any further questions or
                          concerns, please do not hesitate to contact us.
                          Sincerely, Admin Name
                        </p>
                      </div>
                      <div className="row">
                        <p className="text-justify">
                          Dear Vendor Name, I am writing to apologize for the
                          delay in processing your withdrawal request. We
                          understand that you need access to these funds, and we
                          are working hard to get them to you as soon as
                          possible. We have investigated the matter, and we have
                          determined that the delay was due to a technical
                          issue. This issue has been resolved, and your
                          withdrawal request is now being processed. We expect
                          that the funds will be deposited into your bank
                          account within [number of business days]. You will
                          receive an email notification once the funds have been
                          deposited. We appreciate your patience and
                          understanding. If you have any further questions or
                          concerns, please do not hesitate to contact us.
                          Sincerely, Admin Name
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <div className="type-message">
                      <input className="message-input" placeholder="Send your response"/>
                      <button className="upload-img-icon "><FiPaperclip/></button>
                    </div>
                  </div>
                  <div className="col-sm-auto my-1">
                    <button className="primary-btn w-100">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-3 my-3">
          <div className="card-with-border">
            <div className="card-header">
              <p>Contact Details</p>
            </div>
            <div className="card-body">
              <p className="fw-500 fs-18">Enumeral Waste Solutions Limited</p>
              <div className="row">
                <div className="col-auto">
                  <HiOutlineLocationMarker className="primary-color fs-20" />
                </div>
                <div className="col">
                  <p className="mb-3 fs-16 gray-color fw-500">
                    abc street, xyz city
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-auto">
                  <BiPhone className="primary-color fs-20" />
                </div>
                <div className="col">
                  <p className="mb-3 fs-16 gray-color fw-500">
                    +234 09-461-4000
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-auto">
                  <FaRegUser className="primary-color fs-20" />
                </div>
                <div className="col">
                  <p className="mb-3 fs-16 gray-color fw-500">Contact Person</p>
                </div>
              </div>
              <div className="row">
                <div className="col-auto">
                  <HiOutlineEnvelope className="primary-color fs-20" />
                </div>
                <div className="col">
                  <p className="mb-3 fs-16 gray-color fw-500">
                    vendor@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-with-border my-4">
            <div className="card-header">
              <p>Ticket Information</p>
            </div>
            <div className="card-body">
              <p className="fw-500 fs-18">Ticket opened by : </p>
              <div className="row">
                <div className="col-auto">
                  <FaRegUser className="primary-color fs-20" />
                </div>
                <div className="col">
                  <p className="mb-0 fs-16 gray-color fw-500">
                    Enumeral Waste Solutions Limited
                  </p>
                  <p className="fs-14 gray-color">vendor@gmail.com</p>
                </div>
              </div>
              <p className="fw-500 fs-18">Also on this Ticket : </p>
              <div className="row">
                <div className="col-auto">
                  <FaRegUser className="primary-color fs-20" />
                </div>
                <div className="col">
                  <p className="mb-0 fs-16 gray-color fw-500">Admin Name</p>
                  <p className="fs-14 gray-color">admin@gmail.com</p>
                </div>
              </div>
              <div className="row">
                <div className="col-auto">
                  <FaRegUser className="primary-color fs-20" />
                </div>
                <div className="col">
                  <p className="mb-0 fs-16 gray-color fw-500">
                    Sub - Admin Name
                  </p>
                  <p className="fs-14 gray-color">subadmin@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorTicketDetails;
