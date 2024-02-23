import React, { useState } from "react";
import { Input, Radio, Space } from "antd";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";

function CreateUser() {
  const navigate = useNavigate();
  const breadcrumbItems = [
    { label: "User Management" },
    { label: "Create user" },
  ];
  const [value, setValue] = useState("/create/vendor");
  const onChange = (e) => {
    setValue(e.target.value);
    navigate(e.target.value);
  };
  return (
    <div className="container-fluid position-relative px-0">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-md-4 col-xxl-3  position-relative">
          <div className="add-user-form position-fixed">
            <p className="fs-16 fw-500 heading-color">
              Select the User you want to Add
            </p>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={"/user/create/vendor"}>Vendor / Merchant</Radio>
                <Radio value={"/user/create/vendor-staff"}>Vendor staff</Radio>
                <Radio value={"/user/create/sub-admin"}>Sub - Admin</Radio>
                <Radio value={"/user/create/govt-agent"}>Government Agent</Radio>
                <Radio value={"/user/create/waste-management-staff"}>
                  Waste management Staff
                </Radio>
                <Radio value={"/user/create/waste-management-agent"}>
                  Waste management Agent
                </Radio>
              </Space>
            </Radio.Group>
          </div>
        </div>
        <div className="col-md-8 col-xxl-9 px-5">{<Outlet />}</div>
      </div>
    </div>
  );
}

export default CreateUser;
