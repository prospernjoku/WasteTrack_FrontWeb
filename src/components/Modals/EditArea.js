import React from "react";
import { Modal } from "antd";
import { FaRegKeyboard } from "react-icons/fa";
import { Form, Input } from "antd";
const {TextArea} = Input

function EditArea({ isModalOpen, setIsModalOpen }) {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [form] = Form.useForm();
  return (
    <div>
      <Modal
        title=<p className="fw-bold fs-22">Edit Area</p>
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        
        <div className="row">
          <div className="col-md-12">
            <Form layout="vertical" form={form}>
              <div className="row">
                <div className="col-md-12 ">
                  <div className="textarea-icon">
                    <Form.Item>
                      <TextArea placeholder="Enter area..." rows={4} />
                    </Form.Item>
                    <span>
                      <FaRegKeyboard />
                    </span>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <button className="primary-btn w-100">
                    Save
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default EditArea;
