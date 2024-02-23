import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import WasteMgmtAgencyForm from "../../../../components/usermanagement/WasteMgmtAgencyForm";
import { Upload } from "antd";
import { FiCamera } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { RxEnvelopeClosed } from "react-icons/rx";
import { BsEyeFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Outlet, useNavigate } from "react-router-dom";
import {Popconfirm , message} from 'antd';

function WasteManagementAgency() {
  const navigate = useNavigate();
  const breadcrumbItems = [
    { label: "User Management" },
    { label: "Waste Management Agency" },
  ];
  const [isAgencyExists, setIsAgencyExists] = useState(false);
  const [isEditAgent, setIsEditAgent] = useState(false);
  useEffect(() => {
    if (isAgencyExists) {
      navigate("/waste-management-agency/add-staff");
    }
  }, [isAgencyExists]);
  const confirm = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-lg-4 my-2">
          {isAgencyExists ? (
            <div className="panel-card">
              <div className="card-body">
                <div className="text-center">
                  <div className="d-inline-block my-3 position-relative">
                    <img
                      src="/images/userLg.png"
                      alt="user-img"
                      className="profileFrm-UserImg"
                    />
                    <Upload>
                      <button className="profileupload-camera">
                        <FiCamera />
                      </button>
                    </Upload>
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
                    <li className="overflow-auto">
                      <p className="fw-500 fs-16 heading-color">
                        <RxEnvelopeClosed className="primary-color fs-5 me-2" />
                        wastemanagementagency@gmail.com
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col p-1">
                    <button
                      className="button-view w-100"
                      onClick={() => {
                        navigate("/waste-management-agency-details");
                      }}
                    >
                      <BsEyeFill className="mb-1" /> View
                    </button>
                  </div>
                  <div className="col p-1">
                    <button
                      className="button-edit w-100"
                      onClick={() => {
                        setIsEditAgent(true);
                      }}
                    >
                      <MdModeEdit className="mb-1" />
                      Edit
                    </button>
                  </div>
                  <div className="col p-1">
                    <Popconfirm
                      title="Delete the task"
                      description="Are you sure to delete this Agency account?"
                      onConfirm={confirm}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                    >
                      <button className="button-delete w-100">
                        <RiDeleteBin6Fill className="mb-1" />
                        Delete
                      </button>
                    </Popconfirm>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="panel-card p-5">
              <div className="card-body">
                <div className="text-center">
                  <img
                    src="/images/noData.png"
                    alt="noDataImg"
                    className="img-fluid"
                  />
                  <p className="fw-600 fs-20">
                    No Waste Management Agency Added
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-lg-8 my-2">
          {isAgencyExists ? (
            isEditAgent ? (
              <WasteMgmtAgencyForm
                handleAgencyExists={setIsAgencyExists}
                handleIsEditAgent={setIsEditAgent}
                isEdit={isEditAgent}
              />
            ) : (
              <Outlet />
            )
          ) : (
            <WasteMgmtAgencyForm handleAgencyExists={setIsAgencyExists} />
          )}
        </div>
      </div>
    </div>
  );
}

export default WasteManagementAgency;
