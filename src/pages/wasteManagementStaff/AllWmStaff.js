import React from "react";
import { AiFillEye } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Breadcrumbs from "../../components/Breadcrumbs";
import TableComponents from "../../components/Table/TableComponents";
import TablePagination from "../../components/Table/TablePagination";
import { useNavigate } from "react-router-dom";
import { Popconfirm, message } from "antd";
function AllWmStaff() {
  const navigate = useNavigate();
  const breadcrumbItems = [{ label: "Staff Management" }];
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
      <div className="row ">
        <div className="col">
          <TableComponents />
        </div>
        <div className="col-auto">
          <button
            className="primary-btn ms-2"
            onClick={() => {
              navigate("/staff/add");
            }}
          >
            <FiPlusCircle className="mb-1 me-2" />
            Add Vendor Staff
          </button>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-12">
          <div className="table-wrapper table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Code</th>
                  <th>Company Name</th>
                  <th>Company Address</th>
                  <th>Email</th>
                  <th>Contact Name</th>
                  <th>Date Added</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>123456</td>
                      <td>Enumeral Waste Solutions Limited</td>
                      <td>
                        Lorem ipsum dolor sit amet. Nam ducimus repellendus At
                        voluptatem
                      </td>
                      <td>vendor@gmail.com</td>
                      <td>Lorem ipsum</td>
                      <td className="ws-nowrap">19 Sept 2023</td>
                      <td>
                        <div className="tableAction-wrapper">
                          <button
                            className="tableAction-btn btn-view"
                            onClick={() => {
                              navigate("/staff-details/id");
                            }}
                          >
                            <AiFillEye />
                          </button>
                          <button
                            className="tableAction-btn btn-edit"
                            onClick={() => {
                              navigate("/staff/edit");
                            }}
                          >
                            <MdEdit />
                          </button>
                          <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this staff?"
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

export default AllWmStaff;
