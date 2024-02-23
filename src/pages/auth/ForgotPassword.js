import React, { useState } from "react";
import { Form, Input,Select } from "antd";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Loader from "../../components/Loader";
function ForgotPassword() {
  const [form] = Form.useForm();
  const [formEnabled , setFormEnabled] = useState(false)

  const [loading] = useState(false);
  const handleAccountSelection = (selectedValues)=>{
    if(selectedValues.length > 0){
      setFormEnabled(true)
    }else{
      setFormEnabled(false)
    }
  }
  const handleFormSubmit = (values) => {
 console.log("Form submitted")
  };

  return (
    <div className="container-fluid auth-page-bg">
      <div className="row h-100">
        <div className="col-md-5 auth-page-left">
          <div className="row h-100">
            <div className="col-md-12 logo-heading">
            <img src="/images/logo.png" alt="logo-img" className="img-fluid"/>
              {/* <p className="logo-heading">WasteTrack</p> */}
            </div>
            <div className="col-md-12 auth-page-left-bottom">
              <img
                src="/images/loginPageImg.png"
                alt="login-img"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="col-md-7 auth-form-right">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-md-7 auth-page-form">
              <div>
                <p className="heading-1">Forgot Password</p>
                <p className="fs-18 gray-color">
                  Enter your email and we'll send you a link to get back into
                  your account.
                </p>
              </div>
              <div className="mt-5 form-custom-style">
                <Form
                  form={form}
                  name="login"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={handleFormSubmit}
                  layout="vertical"
                  autoComplete="on"
                  requiredMark={false}
                >
                  <div className="row ">
                    <div className="col-md-12">
                      <Form.Item
                        name="role"
                        label="Select Account"
                        extra = "Select your account type to get started with the password recovery process."
                        rules={[
                          {
                            required: true,
                            message: "Please select account!",
                          },
                        ]}
                        
                      >
                        <Select
                          placeholder="Select Account"
                          value="admin"
                          
                          onChange={handleAccountSelection}
                          options={[
                            {
                              value: "admin",
                              label: "Admin",
                            },
                            {
                              value: "subadmin",
                              label: "Sub Admin",
                            },
                            {
                              value: "vendor",
                              label: "Vendor",
                            },
                            {
                              value: "vendorStaff",
                              label: "Vendor Staff",
                            },
                            {
                              value: "govtAgent",
                              label: "State Government Agency",
                            },
                            {
                              value: "wasteMgmtAgency",
                              label: "Waste Management Agency",
                            },
                            {
                              value: "wasteMgmtStaff",
                              label: "Waste Management Staff",
                            },
                          ]}
                        />
                      </Form.Item>
                    </div>
                    <div className="col-md-12">
                      <Form.Item
                   
                        name="email"
                        label="Email Address"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                          {
                            type: "email",
                            message: "Please input valid email!",
                          },
                        ]}
                      >
                        <Input placeholder="example@gmail.com"    disabled={!formEnabled} />
                      </Form.Item>
                    </div>

                    <div className="col-md-12 py-4">
                      <button type="submit" disabled={!formEnabled} className="auth-form-btn btn-100">
                        {loading ? <Loader /> : "Send login link"}
                      </button>
                    </div>
                    <div className="col-md-12 text-center">
                      <Link to="/login" className="fs-18 fw-500 primary-color">
                        Back to login
                        <span>
                          <HiOutlineArrowNarrowRight className="fs-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
