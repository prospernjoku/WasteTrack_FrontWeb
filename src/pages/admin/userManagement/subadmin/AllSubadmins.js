import React from "react";
import { AiFillEye } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import { message, Popconfirm } from "antd";
import TableComponents from "../../../../components/Table/TableComponents";
import TablePagination from "../../../../components/Table/TablePagination";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";
function AllSubadmins() {
  const breadcrumbItems = [
    { label: "User Management" },
    { label: "Sub-Admin" },
  ];
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
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-md">
          <TableComponents />
        </div>
        <div className="col-md-auto">
          <button
            className="primary-btn"
            onClick={() => {
              navigate("/subadmin/add");
            }}
          >
            <IoMdAddCircleOutline className="me-2 fs-22 mb-1" />
            Add Sub-Admin
          </button>
        </div>
      </div>
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
                      <td>subadmin@gmail.com</td>
                      <td className="ws-nowrap">19 Sept 2023</td>
                      <td>
                        <div className="tableAction-wrapper">
                          <button
                            className="tableAction-btn btn-view"
                            onClick={() => navigate("/subadmin/details")}
                          >
                            <AiFillEye />
                          </button>
                          <button
                            className="tableAction-btn btn-edit"
                            onClick={() => navigate("/subadmin/edit")}
                          >
                            <MdEdit />
                          </button>
                          <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this Subadmin account?"
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
      <div className="row">
        <div className="col-md-12">
          <TablePagination />
        </div>
      </div>
    </div>
  );
}

export default AllSubadmins;
