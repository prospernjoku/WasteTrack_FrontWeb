import React from "react";
import TableComponents from "../../components/Table/TableComponents";
import { AiFillEye } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { TbDownload } from "react-icons/tb";
import TablePagination from "../../components/Table/TablePagination";
import { message, Popconfirm } from "antd";
import { useNavigate } from "react-router-dom";

function GeneratedNylons() {
  const navigate = useNavigate()
  const confirm = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  return (
    <div>
      <TableComponents />
      <div className="row my-4">
        <div className="col-md-12">
          <div className="table-wrapper table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Batch Number</th>
                  <th>Date of Generation</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>7478939857564</td>
                      <td className="ws-nowrap">09/ 09/ 2023, 12:45 PM</td>
                      <td className="ws-nowrap">
                        {
                          index % 2 === 0 ?
                          <span className="primary-badge text-uppercase mb-0">Printed</span>:
                          <span className="danger-badge text-uppercase mb-0">Not Printed</span>
                        }
                      </td>
                      <td className="ws-nowrap">
                        <div className="tableAction-wrapper">
                          <button
                            className="tableAction-btn btn-view"
                            onClick={() => {
                              navigate('/nylon/template')
                            }}
                          >
                            <AiFillEye />
                          </button>
                          <button className="tableAction-btn btn-download">
                            <TbDownload />
                          </button>
                          <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this batch?"
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

export default GeneratedNylons;
