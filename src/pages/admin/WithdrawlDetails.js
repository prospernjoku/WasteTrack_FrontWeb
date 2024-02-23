import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { LuMapPin } from "react-icons/lu";
import { BiPhone } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
function WithdrawlDetails() {
  const breadcrumbItems = [{ label: "Withdrawl Request" }];
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-md-12 mb-3 text-end">
        <button className="reject-button"> <MdOutlineCancel className="fs-22 me-2"/>Reject</button>
          <button className="ms-2 approve-button"> <AiOutlineCheckCircle className="fs-22 me-2"/>Approve</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 my-2">
          <div className="panel-card secondary-border shadow-none">
            <div className="card-header border-0">
              <p>Request Info</p>
            </div>
            <div className="card-body pb-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="gray-color fs-16">Request Id</p>
                </div>
                <div className="col-md-6">
                  <p className="fs-16 heading-color">#1234567890</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p className=" gray-color fs-16">Request Date & Time</p>
                </div>
                <div className="col-md-6">
                  <p className="fs-16 heading-color">2 Sept 2023, 11:45AM</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p className=" gray-color fs-16">Status</p>
                </div>
                <div className="col-md-6">
                  <p className="fs-16 heading-color fw-500 warning-color d-flex align-items-center">
                    <span className="status-dots warning-bg me-2"></span>{" "}
                    Pending
                  </p>
                </div>
              </div>
            </div>

            <div className="divider mb-3"></div>
            <div className="card-header border-0">
              <p>Vendor Details</p>
            </div>
            <div className="card-body pb-0">
              <div className="row">
                <div className="col-md-12">
                  <p className="fs-18 fw-500">
                    Enumeral Waste Solutions Limited
                  </p>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12">
                  <p className="fs-16 heading-color">
                    <span className="primary-color fs-20 me-2">
                      <LuMapPin />
                    </span>
                    abc street, xyz city
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="fs-16 heading-color">
                    <span className="primary-color fs-20 me-2">
                      <BiPhone />
                    </span>
                    +234 09-461-4000
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="fs-16 heading-color">
                    <span className="primary-color fs-20 me-2">
                      <FaRegUser />
                    </span>
                    Contact person
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="fs-16 heading-color">
                    <span className="primary-color fs-20 me-2">
                      <HiOutlineMail />
                    </span>
                    vendor@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-8 my-2">
          <div className="panel-card secondary-border shadow-none">
            <div className="card-body product-detail-table pb-0 table-responsive">
              <table className="table table-borderless">
                <thead>
                  <tr className="border-bottom">
                    <th>Serial Number</th>
                    <th>Collected on</th>
                    <th className="ws-nowrap text-end">Price/ Bag</th>
                    <th className="text-end ws-nowrap">Revenue Share</th>
                  </tr>
                </thead>
                <tbody className="border-bottom">
                {
                  [...Array(8)].map((element,index)=>{
                    return      <tr>
                    <td>
                      <div>
                        <p className="mb-2 fs-16 gray-color">HCXC8849287896</p>
                      </div>
                    </td>
                    <td className="ws-nowrap">
                      <p className="mb-2 fs-16 gray-color ">15 Sept 2023, 11:45AM</p>
                    </td>
                    <td className="ws-nowrap text-end">
                      <p className="mb-2 fs-16 gray-color ">₦ 380.00</p>
                    </td>
                    <td className="ws-nowrap text-end">
                      <p className="mb-2 fs-16 gray-color ">₦ 57.00</p>
                    </td>
                  </tr>
                  })
                }
             
                </tbody>
              </table>
                <div className="row justify-content-between px-2">
                <div className="col-auto"> <p className="fw-500">Total</p></div>
                <div className="col-auto"> <p className="fw-500">₦456.00</p></div>
                 
                 
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithdrawlDetails;
