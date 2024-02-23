import React, { useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import TableComponents from "../../../components/Table/TableComponents";
import { MdEdit } from "react-icons/md";
import TablePagination from "../../../components/Table/TablePagination";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Popconfirm, message } from "antd";
import AddArea from "../../../components/Modals/AddArea";
import EditArea from "../../../components/Modals/EditArea";
function Areas() {
  const breadcrumbItems = [{ label: "Vendor Management" }, { label: "Areas" }];
  const[addAreaModal ,setAddAreaModal] = useState(false)
  const[editAreaModal ,setEditAreaModal] = useState(false)
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
      <div className="row align-items-end align-items-xl-center">
        <div className="col">
          <TableComponents />
        </div>
        <div className="col-auto">
          <button className="light-outline-btn" onClick={()=>{setAddAreaModal(true)}}><AiOutlinePlusCircle className="mb-1 me-3 primary-color"/>Add Area</button>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-12">
          <div className="table-wrapper table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Areas</th>
                  <th>Company Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>
                        Lorem ipsum dolor sit amet. Nam ducimus repellendus At
                        voluptatem
                      </td>
                      <td>Enumeral Waste Solutions Limited</td>
                      <td className="ws-nowrap">
                        <span className="primary-badge">Not Assigned</span>
                      </td>
                      <td className="ws-nowrap">
                        <div className="tableAction-wrapper">
                          <button className="tableAction-btn btn-edit" onClick={()=>{setEditAreaModal(true)}}>
                            <MdEdit />
                          </button>
                          <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this area?"
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
      <AddArea isModalOpen={addAreaModal} setIsModalOpen={setAddAreaModal}/>
      <EditArea isModalOpen={editAreaModal} setIsModalOpen={setEditAreaModal}/>
    </div>
  );
}

export default Areas;
