import React from 'react'
import { Form, Input } from "antd";

function CreateGovtAgent() {
  const [form] = Form.useForm();
  return (
    <div className="form-card form-sm-custom-style mb-4">
    <div className="form-heading">
          <p className="gray-color fw-500 fs-22">Create Government agent</p>
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
        <button className="form-outline-btn me-2">Cancel</button>
          <button className="form-btn">Add User</button>
        </div>
      </div>
    </Form>
  </div>
  )
}

export default CreateGovtAgent