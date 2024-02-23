import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
function ChangePassword() {
  const [form] = Form.useForm();
  return (
    <div className="form-card form-sm-custom-style">
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
          <div className="col-md-12">
            <Form.Item name="password" label="Current Password">
              <Input.Password placeholder="Current Password" />
            </Form.Item>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Item name="newPassword" label="New Password">
              <Input.Password placeholder="New Password" />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item name="confirmPassword" label="Confirm Password">
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12 pt-4 mb-2">
            <button className="form-btn">Save Changes</button>
          </div>
        </div>
        <div className="col-md-12 text-start">
          <Link to="/forgot-password" className="fs-18 fw-500 primary-color">
            Forgot Password?
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default ChangePassword;
