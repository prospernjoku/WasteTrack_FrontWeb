import React from 'react'
import { Form, Input } from "antd";
import { Link} from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { passwordValidator } from '../../services/validation';

function ResetPassword() {
    const [form] = Form.useForm();
   
    const confirmPasswordValidator = (_, value) => {
      const passwordFieldValue = form.getFieldValue("password");
      if (!value || passwordFieldValue === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("Passwords do not match"));
    };


    const onHandleForm = (values) => {
      console.log("Form submitted")
    };
  return (
    <div className="container-fluid auth-page-bg">
    <div className="row h-100">
      <div className="col-md-5 auth-page-left">
        <div className="row h-100">
          <div className="col-md-12 logo-heading">
            {/* <p className="logo-heading">WasteTrack</p> */}
            <img src="/images/logo.png" alt="logo-img" className="img-fluid"/>
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
              <p className="heading-1">Reset Password</p>
              
            </div>
            <div className='mt-5 form-custom-style'>
              <Form
                form={form}
                name="login"
                initialValues={{
                  remember: true,
                }}
                onFinish={onHandleForm}
                layout="vertical"
                autoComplete="on"
                requiredMark={false}
              >
                <div className="row">
                <div className="col-md-12">
                      <Form.Item name="password" label="New password" rules={[
                        {
                          required: true,
                          message: "Enter new password!",
                          whitespace: true,
                        },
                        { validator: passwordValidator },
                      ]}>
                        <Input.Password placeholder="Enter New Password" />
                      </Form.Item>
                    </div>  <div className="col-md-12">
                      <Form.Item name="confirm_password" label="Confirm Password"  rules={[
                        {
                          required: true,
                          message: "Confirm your password!",
                        },
                        {
                            validator: confirmPasswordValidator,
                          },
                        
                      ]}>
                        <Input.Password placeholder="Re-enter Password" />
                      </Form.Item>
                    </div>

                  <div className="col-md-12 py-4">
                    <button className="auth-form-btn  btn-100">Confirm</button>
                  </div>
                  <div className="col-md-12 text-center">
                    <Link to="/login" className="fs-18 fw-500 primary-color">
                      Go to login page
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
  )
}

export default ResetPassword