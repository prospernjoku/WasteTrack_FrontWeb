import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { Form, Input } from "antd";

function CreatevendorStaff() {
    const [form] = Form.useForm();
  const breadcrumbItems = [{ label: "Staff Management" }, { label: "Add" }];
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-md-10">
          <div className="form-card form-sm-custom-style mb-4">
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
                  <button className="form-btn">Add User</button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatevendorStaff;
