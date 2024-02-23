import React, { useState } from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { Upload, Popconfirm, message, Form, Input } from "antd";
import { FiCamera } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { RxEnvelopeClosed } from "react-icons/rx";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BsEyeFill } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function NylonProductionCompany() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const breadcrumbItems = [
    { label: "User Management" },
    { label: "Nylon Production Company" },
  ];

  const [isEdit, SetIsEdit] = useState(false);

  const [isCompanyExists, setIsCompanyExists] = useState(false);
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
          {isCompanyExists ? (
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
                  <p className="text-center fs-20 fw-600">Nylon Company name</p>
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
                        company@gmail.com
                      </p>
                    </li>
                    <li>
                      <p className="fw-500 fs-16 heading-color">
                        <BiPhone className="primary-color fs-5 me-2" />
                        +234 90-461-4000
                      </p>
                    </li>
                    <li>
                      <p className="fw-500 fs-16 heading-color">
                        <HiOutlineLocationMarker className="primary-color fs-5 me-2" />
                        abc colony, xyz area, pqr city, 123456
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col p-1">
                    <button
                      className="button-view w-100"
                      onClick={() => {
                        navigate("/nylon-production-company-details");
                      }}
                    >
                      <BsEyeFill className="mb-1" /> View
                    </button>
                  </div>
                  <div className="col p-1">
                    <button
                      className="button-edit w-100"
                      onClick={() => {
                        SetIsEdit(true);
                      }}
                    >
                      <MdModeEdit className="mb-1" />
                      Edit
                    </button>
                  </div>
                  <div className="col p-1">
                    <Popconfirm
                      title="Delete the task"
                      description="Are you sure to delete this Company account?"
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
                    No Nylon Production Company Added
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-lg-8 ">
          <div className="form-card form-sm-custom-style mb-4 position-relative">
            {!isCompanyExists || isEdit ? "" : <div className="overlap"></div>}
            <div>
              <p className="primary-color fw-500 fs-22 text-decoration-underline">
                {!isEdit ? "Add" : "Edit"} Nylon Production Company
              </p>
            </div>
            <Form
              form={form}
              name="login"
              initialValues={{
                remember: true,
              }}
              onFinish={() => {
                setIsCompanyExists(true);
                SetIsEdit(false);
              }}
              layout="vertical"
              autoComplete="off"
              requiredMark={false}
            >
              <div className="row">
                <div className="col-md-6">
                  <Form.Item name="firstname" label="First Name">
                    <Input placeholder="First Name" />
                  </Form.Item>
                </div>
                <div className="col-md-6">
                  <Form.Item name="lastname" label="Last Name">
                    <Input placeholder="Last Name" />
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Form.Item name="email" label="Email Address">
                    <Input placeholder="example@gmail.com" />
                  </Form.Item>
                </div>
                <div className="col-md-6">
                  <Form.Item name="phone" label="Phone Number">
                    <Input placeholder="+234 09-461-4000" />
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Form.Item name="company_name" label="Comapany Name">
                    <Input placeholder="Company Name" />
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Form.Item name="company_address" label="Comapany Address">
                    <Input.TextArea rows={4} placeholder="Company Address" />
                  </Form.Item>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12">
                  <button className="btn form-btn" disabled = {!isCompanyExists || isEdit ? false :true} >
                    {!isEdit ? "Add Company" : "Save"}
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NylonProductionCompany;
