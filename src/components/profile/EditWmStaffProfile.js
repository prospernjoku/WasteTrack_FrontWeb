import React from 'react'
import { Form, Input, Upload } from "antd";
import { FiCamera } from "react-icons/fi";


function EditWmStaffProfile() {
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
              <div className="d-inline-block mb-4 position-relative">
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
          </div>
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
              <Form.Item name="email" label="Email">
                <Input placeholder="example@gmail.com" />
              </Form.Item>
            </div>
            <div className="col-md-6">
              <Form.Item name="mobile" label="Mobile">
                <Input placeholder="Enter Mobile No" />
              </Form.Item>
            </div>
          </div>
         
          <div className="row">
            <div className="col-md-12">
              <Form.Item name="designation" label="Designation">
                <Input placeholder="Enter Designation" />
              </Form.Item>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-12 py-4">
              <button className="form-btn">Save Changes</button>
            </div>
          </div>
        </Form>
      </div>
    )
}

export default EditWmStaffProfile