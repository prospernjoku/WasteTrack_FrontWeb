import React from "react";
import { Form, Input } from "antd";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useLocation } from "react-router-dom";
function AddWmstaff() {
  const [form] = Form.useForm()
  const location = useLocation()
  const breadcrumbItems = [
    { label: "Staff Management" },
    { label: location?.pathname === "/staff/add" ? "Add " : "Edit Staff" },
  ];
  return (
    <div className="container-fluid">
    <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-md-8">
          <div className="form-card form-sm-custom-style mb-4">
            <div className="form-heading">
              <p className="primary-color fw-500 fs-22 text-decoration-underline">
                {location?.pathname === "/staff/add"
                  ? "Add "
                  : "Edit "}
                   Waste Management Staff
              </p>
            </div>
            <Form
              form={form}
              name="login"
              initialValues={{
                remember: true,
              }}
              // onFinish={() => {
              //   navigate("/waste-management-agency");
              // }}
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
                  <Form.Item name="password" label="Set Password">
                    <Input.Password placeholder="Password" />
                  </Form.Item>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12">
                  <button className="form-btn">
                
                    {location?.pathname === "/staff/add"
                      ? "Add Staff"
                      : "Save"}
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

export default AddWmstaff;
