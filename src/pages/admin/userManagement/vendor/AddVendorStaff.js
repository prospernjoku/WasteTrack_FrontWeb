import React, { useState } from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { Select } from "antd";
import { FiSearch, FiMapPin } from "react-icons/fi";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BiPhone } from "react-icons/bi";
import { Form, Input } from "antd";

function AddVendorStaff() {
  const [form] = Form.useForm();
  const [VendorSelect, setVendorSelect] = useState(false);
  const breadcrumbItems = [
    { label: "Vendor Management" },
    { label: "All vendors", url: "/vendor/all" },
    { label: "Add Vendor Staff" },
  ];
  const handleVendorSelect = () => {
    setVendorSelect(true);
  };
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-lg-3 mb-2 my-2">
          <div className="antd-search-selector">
            <span className="search-icon">
              <FiSearch className="primary-color" />
            </span>
            <Select
              suffixIcon={<BiSolidDownArrow className="primary-color" />}
              placeholder="Search Vendor"
              onChange={() => handleVendorSelect()}
              options={[
                {
                  value: "Lorem1",
                  label: "Lorem ipsum dolor sit amet",
                },
                {
                  value: "Lorem2",
                  label: "Lorem ipsum dolor sit amet",
                },
                {
                  value: "Lorem3",
                  label: "Lorem ipsum dolor sit amet",
                },
                {
                  value: "Lorem4",
                  label: "Lorem ipsum dolor sit amet",
                },
                {
                  value: "Lorem5",
                  label: "Lorem ipsum dolor sit amet",
                },
              ]}
            />
          </div>
          {
            VendorSelect ?
            <div className="panel-card my-3">
            <div className="card-body">
              <p className="fw-500 heading-color fs-20">Vendor Company name</p>
              <p className="heading-color fs-16 mb-3">
                <FaRegUser className="me-3 fs-20 primary-color" />
                Ralph Edwards
              </p>
              <p className="heading-color fs-16 mb-3">
                <FiMail className="me-3 fs-20 primary-color" />
                vendor@gmail.com
              </p>
              <p className="heading-color fs-16 mb-3">
                <BiPhone className="me-3 fs-20 primary-color" />
                +234 90-461-4000
              </p>
              <p className="heading-color fs-18 mb-0">
                <FiMapPin className="me-3 fs-20 primary-color" />
                abc colony, xyz area, pqr city, 123456
              </p>
            </div>
          </div> : ""
          }
        </div>
        <div className="col-lg-9 my-2">
           <div className="form-card form-sm-custom-style mb-4">
            <div className="form-heading">
              <p className="primary-color fw-500 fs-22 text-decoration-underline">Add Vendor staff</p>
            </div>
            <Form
              form={form}
              name="login"
              initialValues={{
                remember: true,
              }}
              layout="vertical"
              autoComplete="on"
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
                  <Form.Item name="password" label="Set Password">
                    <Input.Password placeholder="Password" />
                  </Form.Item>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12">
                  <button className="form-btn">Add Vendor Staff</button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddVendorStaff;
