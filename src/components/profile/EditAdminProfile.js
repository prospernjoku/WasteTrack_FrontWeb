import React, { useEffect, useState } from "react";
import { Form, Input, Upload} from "antd";
import { FiCamera } from "react-icons/fi";
import {  useSelector } from "react-redux";

function EditAdminProfile() {
  const [form] = Form.useForm();
  const userInfo = useSelector((state) => state.auth.user);
  const [loading ] = useState(false)
  const handleEditForm = (values) => {
    console.log("Form submitted")
  };
  useEffect(() => {
    form.setFieldsValue({
      firstname: userInfo?.firstname,
      lastname: userInfo?.lastname,
      email: userInfo?.email,
      designation: userInfo?.designation,
    });
  }, [userInfo,form]);

  return (
    <div className="form-card form-sm-custom-style">
      <Form
        form={form}
        name="login"
        initialValues={{
          remember: true,
        }}
        onFinish={handleEditForm}
        layout="vertical"
        autoComplete="on"
        requiredMark={false}
      >
        <div className="row">
          <div className="col-md-12">
            <div className="d-inline-block mb-4 position-relative">
            {
              userInfo?.profile_img ? 
              <img
                src={`${process.env.REACT_APP_API_BASE_URL + "/" +userInfo?.profile_img}`} 
                alt="user-img"
                className="profileFrm-UserImg"
              />:
               <img
                src="/images/userLg.png"
                alt="user-img"
                className="profileFrm-UserImg"
              />
            }
             
              <Upload showUploadList={false}>
                <button className="profileupload-camera">
                  <FiCamera />
                </button>
              </Upload>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Item
              name="firstname"
              label="First Name"
              rules={[
                {
                  required: true,
                  message: "Please enter your First Name.",
                },
              ]}
            >
              <Input placeholder="Enter First Name" />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item
              name="lastname"
              label="Last Name"
              rules={[
                {
                  required: true,
                  message: "Please enter your Last Name.",
                },
              ]}
            >
              <Input placeholder="Enter Last Name" />
            </Form.Item>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Enter Email" />
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
            <button className="form-btn" disabled={loading}>Save Changes</button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default EditAdminProfile;
