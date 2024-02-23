import React, {  useState } from "react";
import { Form, Input, Select, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { ActionTypes } from "../../redux/constants/ActionTypes";
import { useDispatch } from "react-redux";
import Loader from "../../components/Loader";

function LoginPage() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // HANDLE LOGIN
  const handleLogin = (values) => {

    fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      const user = data.find(
        (user) => user.email === values?.email && user.password === values?.password && user.role === values?.role
      );


      if (user) {
        localStorage.setItem(
          "userInfo",
          JSON.stringify(user)
        );
        // localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("loggedIn", true);
        dispatch({
          type: ActionTypes.USER_LOGIN_SUCCESS,
          payload: user,
        });
        form.resetFields();
        navigate("/");
        setLoading(false);
      } else {
        setLoading(false);
        message.error("Invalid username or password");
      }
    });
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
                <p className="heading-1">Login</p>
              </div>
              <div className="mt-5 form-custom-style">
                <Form
                  form={form}
                  name="login"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={handleLogin}
                  layout="vertical"
                  autoComplete="on"
                  requiredMark={false}
                >
                  <div className="row ">
                    <div className="col-md-12">
                      <Form.Item
                        name="role"
                        label="Select Account"
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
                              value: "govtAgency",
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
                            type: "email",
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Input placeholder="example@gmail.com" />
                      </Form.Item>
                    </div>
                    <div className="col-md-12">
                      <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                        ]}
                      >
                        <Input.Password placeholder="Enter Password" />
                      </Form.Item>
                    </div>

                    <div className="col-md-12 text-end">
                      <Link
                        to="/forgot-password"
                        className="fs-18 fw-500 primary-color"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="col-md-12 py-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="auth-form-btn btn-100"
                      >
                        {loading ? <Loader /> : "Login"}
                      </button>
                    </div>
                    <div className="col-md-12 text-center">
                      <Link
                        to="/register"
                        className="fs-18 fw-500 primary-color"
                      >
                        Register as vendor
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

export default LoginPage;
