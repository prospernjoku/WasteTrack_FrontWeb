import React from "react";
import { Form, Input } from "antd";
function WasteMgmtAgencyForm({ handleAgencyExists, handleIsEditAgent, isEdit}) {
  const [form] = Form.useForm();
  return (
    <div className="form-card form-sm-custom-style mb-4">
      <div>
        <p className="primary-color fw-500 fs-22 text-decoration-underline">
          {!isEdit ? "Add" : "Edit"} Waste Management Agency
        </p>
      </div>
      <Form
        form={form}
        name="login"
        initialValues={{
          remember: true,
        }}
        onFinish={() => {
          handleAgencyExists(true);
          if(isEdit){
            handleIsEditAgent(false)
          }
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
            <Form.Item name="password" label="Set Password">
              <Input.Password placeholder="Password" />
            </Form.Item>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12">
            <button className="form-btn">
              {!isEdit ? "Add Agency" : "Save"}{" "}
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default WasteMgmtAgencyForm;
