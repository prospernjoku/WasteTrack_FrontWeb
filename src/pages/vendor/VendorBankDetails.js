import React from "react";
import { Form, Input } from "antd";

function VendorBankDetails() {
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
            <Form.Item name="bank_name" label="Bank Name">
              <Input placeholder="Bank Name" />
            </Form.Item>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Item name="account_no" label="Account Number">
              <Input placeholder="Account Number" />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item name="Account Holder Name" label="Account Holder Name">
              <Input placeholder="Account Holder Name" />
            </Form.Item>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12 pt-4 mb-2">
            <button className="form-btn">Save Changes</button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default VendorBankDetails;
