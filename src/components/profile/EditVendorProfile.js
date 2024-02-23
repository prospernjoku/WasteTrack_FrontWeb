import React, { useEffect} from 'react'
import { Form, Input, Upload,message } from "antd";
import { FiCamera } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '../../redux/constants/ActionTypes';

function EditVendorProfile() {
    const [form] = Form.useForm();

    const dispatch = useDispatch()
  
    const userInfo = useSelector((state) => state.auth.user);
  
    const handleEditForm = (values) => {
    console.log("Form Submitted")
    };
  
    const props = {
      name: 'profile',
      action: `${process.env.REACT_APP_API_BASE_URL}/web/vendor/upload-profile`,
      data: {user_id : userInfo?.user_id},
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          localStorage.setItem(
            "userInfo",
            JSON.stringify(info.file.response.data)
          );
          dispatch({
            type: ActionTypes.USER_LOGIN_SUCCESS,
            payload: info.file.response.data,
          });
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    useEffect(() => {
      form.setFieldsValue({
        firstname: userInfo?.firstname,
        lastname: userInfo?.lastname,
        email: userInfo?.email,
        mobile : userInfo?.mobile,
        designation: userInfo?.designation,
        company_name:userInfo?.company_name,
        company_address:userInfo?.company_address,
        website : userInfo?.website
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
            <img
              src="/images/userLg.png"
              alt="user-img"
              className="profileFrm-UserImg"
            />
            <Upload {...props}  showUploadList={false}>
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
          <Form.Item name="mobile" label="Mobile Number">
            <Input placeholder="+234 09-461-4000" />
          </Form.Item>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Form.Item name="company_name" label="Company Name">
            <Input placeholder="Company Name" />
          </Form.Item>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Form.Item name="company_address" label="Company Address">
            <Input.TextArea rows={4} placeholder="Company Address" />
          </Form.Item>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Form.Item name="website" label="Website (if any)" rules={[{
            type : 'url',
            message : "Enter valid url"
          }]}>
            <Input placeholder="Website"/>
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

export default EditVendorProfile