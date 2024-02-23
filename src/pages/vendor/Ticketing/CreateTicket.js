import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { Form, Input, Upload } from "antd";
import {MdUploadFile} from 'react-icons/md';
const { Dragger } = Upload;
function CreateTicket() {
  const [form] = Form.useForm();
  const breadcrumbItems = [
    { label: "Tickets", url: "/ticketing" },
    { label: "Create Ticket" },
  ];
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-md-10">
          <div className="form-card form-sm-custom-style mb-4">
            <div className="row">
              <div className="col-md-12">
                <p className="fs-22 fw-500 primary-color">Create Ticket</p>
              </div>
            </div>
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
                <div className="col-md-6">
                  <Form.Item name="name" label="Name">
                    <Input placeholder=" Name" />
                  </Form.Item>
                </div>
                <div className="col-md-6">
                  <Form.Item name="email" label="Email Address">
                    <Input placeholder="example@gmail.com" />
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Form.Item name="subject" label="Subject">
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Form.Item name="message" label="Message">
                    <Input.TextArea rows={3} placeholder="Message" />
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Form.Item name="images">
                    <Dragger>
                      <p className="ant-upload-drag-icon">
                        <MdUploadFile className="primary-color fs-1"/>
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                  
                    </Dragger>
                  </Form.Item>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12 text-end">
                  <button className="form-outline-btn me-2">Reset</button>
                  <button className="form-btn">Submit</button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
