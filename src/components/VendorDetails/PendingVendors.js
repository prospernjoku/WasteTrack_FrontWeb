import React from "react";
import TableComponents from "../Table/TableComponents";
import TablePagination from "../Table/TablePagination";
import { Popconfirm, message } from "antd";
import { RxCross2 } from "react-icons/rx";
import { BsCheckLg } from "react-icons/bs";

function PendingVendors() {
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
      <div className="row">
        <div className="col-md-12">
          <TableComponents />
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-12">
          <div className="table-wrapper table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Company Name</th>
                  <th>Company Address</th>
                  <th>Email</th>
                  <th>Contact No.</th>
                  <th>Contact Name</th>
                  <th>Request Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>Enumeral Waste</td>
                      <td>abc street, xyz city</td>
                      <td>vendor@gmail.com</td>
                      <td className="ws-nowrap">+234 09-461-4000</td>
                      <td>Lorem ipsum</td>
                      <td className="ws-nowrap">11/ 09/ 2023, 11:45 PM</td>
                      <td>
                        <div className="tableAction-wrapper">
                          <Popconfirm
                            title="Delete the task"
                            description="Are you sure to approve this user?"
                            onConfirm={confirm}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                          >
                            <button className="approve-btn">
                              <BsCheckLg />
                            </button>
                          </Popconfirm>

                          <Popconfirm
                            title="Delete the task"
                            description="Are you sure to reject this user?"
                            onConfirm={confirm}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                          >
                            <button className="reject-btn">
                              <RxCross2 />
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
      <div className="row mb-4">
        <div className="col-md-12">
          <TablePagination />
        </div>
      </div>
    </div>
  );
}

export default PendingVendors;
