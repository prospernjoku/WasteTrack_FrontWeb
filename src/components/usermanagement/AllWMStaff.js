import React from "react";
import TableComponents from "../Table/TableComponents";
import TablePagination from "../Table/TablePagination";
import { useNavigate } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
import { AiFillEye } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Popconfirm,message } from "antd";

function AllWMStaff() {
  const navigate = useNavigate();
  const confirm = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  return (
    <div className="container-fluid">
      <div className="row mb-3 justify-content-between align-items-center">
        <div className="col-auto">
          <p className="primary-color fw-500 fs-22 mb-0 text-decoration-underline">
            Waste Management Staff
          </p>
         
        </div>
        <div className="col-auto">
        <button className="primary-btn" onClick={()=>{
            navigate('/waste-management-agency/add-staff')
          }}>
            <FiPlusCircle className="mb-1 me-2" />
            Add Staff
          </button>
        </div>
      </div>
      <TableComponents />
      <div className="row my-4">
        <div className="col-md-12">
          <div className="table-wrapper table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Date Added</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>Lorem ipsum</td>
                      <td>wastemanagementstaff@gmail.com</td>
                      <td className="ws-nowrap">19 Sept 2023</td>
                      <td>
                        <div className="tableAction-wrapper">
                          <button
                            className="tableAction-btn btn-view"
                            onClick={() => navigate("/waste-management-staff-details/id")}
                          >
                            <AiFillEye />
                          </button>
                          <button
                            className="tableAction-btn btn-edit"
                            onClick={() => navigate('/waste-management-agency/edit-staff')}
                          >
                            <MdEdit />
                          </button>
                          <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this user account?"
                            onConfirm={confirm}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                          >
                            <button className="tableAction-btn btn-delete">
                              <RiDeleteBin6Fill />
                            </button>
                          </Popconfirm>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <TablePagination />
    </div>
  );
}

export default AllWMStaff;
