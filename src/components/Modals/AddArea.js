import React, { useState } from "react";
import { Modal } from "antd";
import { FiDownload } from "react-icons/fi";
import { FaRegKeyboard } from "react-icons/fa";
import { RiFileUploadLine } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Form, Input } from "antd";

const { TextArea } = Input;

function AddArea({ isModalOpen, setIsModalOpen }) {
  const [activeTab, setActiveTab] = useState("manually");
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
        title=<p className="fw-bold fs-22">Add Area</p>
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <div className="row">
          <div className="col-md-12 tabs-container mt-0">
            <ul className="tabs">
              <li
                className={`${
                  activeTab === "manually" ? "active" : ""
                } tab fs-18`}
                onClick={() => {
                  setActiveTab("manually");
                }}
              >
                Enter Area Manually
              </li>
              <li
                className={`${
                  activeTab === "uploadFile" ? "active" : ""
                } tab fs-18`}
                onClick={() => {
                  setActiveTab("uploadFile");
                }}
              >
                Import Area from Excel Sheet
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          {activeTab === "manually" ? (
            <div className="col-md-12">
              <Form layout="vertical" form={form}>
                <div className="row">
                  <div className="col-md-12 ">
                    <div className="textarea-icon">
                      <Form.Item>
                        <TextArea placeholder="Enter area..." rows={4} />
                      </Form.Item>
                      <span><FaRegKeyboard /></span>
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                    <button className="primary-btn w-100">
                      <IoMdAddCircleOutline className="fs-4 mb-1" /> Add Area
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          ) : (
            <div className="col-md-12">
              <ul>
                <li className="gray-color fs-16">
                  We've got a sample template to help you get started.
                </li>
                <li className="gray-color fs-16">
                  Only .xls and .xlsx files are allowed.
                </li>
              </ul>
              <div>
                <button className="light-btn w-100">
                  {" "}
                  <FiDownload className="mb-1 primary-color" /> Download Sample
                </button>
                <button className="primary-btn w-100 mt-2">
                  {" "}
                  <RiFileUploadLine className="fs-4 mb-1" /> Upload Excel File
                </button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default AddArea;
