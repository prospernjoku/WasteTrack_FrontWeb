import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { Form, Input } from "antd";
import { useLocation } from "react-router-dom";
function AddSubadmin() {
  const location = useLocation()
  const [form] = Form.useForm();
  const breadcrumbItems = [
    { label: "User Management" },
    { label: "Sub-Admin", url: "/subadmin/all" },
    { label:  location?.pathname === "/subadmin/add" ? "Add Subadmin" : "Edit Subadmin" },
  ];
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-lg-10 col-xl-8">
          <div className="form-card form-sm-custom-style mb-4">
            <div className="form-heading  mb-4">
              <p className="primary-color text-decoration-underline fw-500 fs-22">{location?.pathname === "/subadmin/add" ? "Add " : "Edit "} Sub admin</p>
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
                  <button className="form-btn">Add Sub-Admin</button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddSubadmin;
