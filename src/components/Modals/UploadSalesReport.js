import React from "react";
import { Modal } from "antd";
import { FiDownload } from "react-icons/fi";
import { RiFileUploadLine } from "react-icons/ri";

function UploadSalesReport({ isModalOpen, setIsModalOpen}) {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        title=<p className="fw-500 fs-22">Upload collected waste</p>
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <div className="row">
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
                <FiDownload className="mb-1 primary-color" /> Download Sample
              </button>
              <button className="primary-btn w-100 mt-2">
                <RiFileUploadLine className="fs-4 mb-1" /> Upload Excel File
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default UploadSalesReport;
