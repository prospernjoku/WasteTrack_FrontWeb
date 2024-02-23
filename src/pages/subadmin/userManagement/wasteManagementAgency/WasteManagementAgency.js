import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { FaRegUser } from "react-icons/fa";
import { RxEnvelopeClosed } from "react-icons/rx";
import { BsEyeFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import TableComponents from "../../../../components/Table/TableComponents";
import TablePagination from "../../../../components/Table/TablePagination";

function WasteManagementAgency() {
  const navigate = useNavigate();
  const breadcrumbItems = [
    { label: "User Management" },
    { label: "Waste Management Agency" },
  ];
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-md-auto">
          <div className="panel-card">
            <div className="card-body">
              <div className="text-center">
                <div className="d-inline-block my-3 position-relative">
                  <img
                    src="/images/userLg.png"
                    alt="user-img"
                    className="profileFrm-UserImg"
                  />
                </div>
              </div>
              <div>
                <p className="text-center fs-20 fw-600">
                  Waste Management Agency Name
                </p>
                <ul className="list-unstyled mb-0">
                  <li>
                    <p className="fw-500 fs-16 heading-color">
                      <FaRegUser className="primary-color fs-5 me-2" />
                      Lorem Ipsum
                    </p>
                  </li>
                  <li>
                    <p className="fw-500 fs-16 heading-color">
                      <RxEnvelopeClosed className="primary-color fs-5 me-2" />
                      wastemanagementagency@gmail.com
                    </p>
                  </li>
                </ul>
              </div>
              <div className="row justify-content-center">
                <div className="col-auto p-1">
                  <button
                    className="button-view w-100"
                    onClick={() => {
                      navigate("/waste-management-agency-details");
                    }}
                  >
                    <BsEyeFill className="mb-1" /> View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md">
          <TableComponents />
          <div className="row my-4">
            <div className="col-md-12">
              <div className="table-wrapper table-responsive">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>S. No.</th>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Date Added</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(10)].map((element, index) => {
                      return (
                        <tr key={index + 1}>
                          <td>{index + 1}</td>
                          <td>Lorem ipsum</td>
                          <td>wastemanagementstaff@gmail.com</td>
                          <td className="ws-nowrap">19 Sept 2023</td>
                          <td className="ws-nowrap">
                          <Link to="/waste-management-staff-details/id" className="primary-color">View Details</Link>
                           
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <TablePagination />
        </div>
      </div>
    </div>
  );
}

export default WasteManagementAgency;
