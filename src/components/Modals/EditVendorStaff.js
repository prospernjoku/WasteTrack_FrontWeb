import React from 'react'
import { Form, Modal, Input } from "antd";

function EditVendorStaff({ isModalOpen, setIsModalOpen }) {
    const [form] = Form.useForm();
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  return (
    <div>
    <Modal
      title=<p className="fw-bold fs-22">Edit Vendor Staff</p>
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
      width={1000}
    >
      <div className="row">
        <div className="col-md-12 form-sm-custom-style">
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
            <div className="row ">
              <div className="col-md-12">
                <button
                  className="form-outline-btn me-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button className="form-btn">Save</button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  </div>
  )
}

export default EditVendorStaff