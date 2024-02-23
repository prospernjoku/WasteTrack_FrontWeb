import React from "react";
import { Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
const {TextArea} = Input;

function Register() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
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
            <div className="col-md-10 auth-page-form">
              <div>
                <p className="heading-1">Vendor Registration</p>
              </div>
              <div className=" mt-4 form-custom-style">
            
                <Form
                  form={form}
                  name="login"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={(values) => {
                    console.log(values);
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
                    <Form.Item name="companyName" label="Company Name">
                        <Input placeholder="Company Name" />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                    <Form.Item name="companyAddress" label="Company Address">
                        <TextArea rows={4} placeholder="Company Name" />
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

                  <div className="row">
                    <div className="col-md-12 pt-4">
                      <button
                        className="auth-form-btn"
                        onClick={() => {
                          navigate("/reset-password");
                        }}
                      >
                        Register
                      </button>
                    </div>
                    <div className="col-md-12 mt-2 text-start">
                    <p className="fs-18  gray-color"> Aleady have an account? 
                      <Link to="/login" className="ms-1 fw-500 primary-color">
                        Login now
                      </Link></p>
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

export default Register;
