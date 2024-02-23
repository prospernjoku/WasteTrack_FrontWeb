import React, { useState } from "react";
import TableComponents from "../Table/TableComponents";
import TablePagination from "../Table/TablePagination";
import {AiFillEye} from 'react-icons/ai';
import {MdEdit} from 'react-icons/md';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import { message, Popconfirm } from 'antd';
import EditVendorStaff from "../Modals/EditVendorStaff";
import { useNavigate } from "react-router-dom";

function VendorStaffList() {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const navigate = useNavigate()
  const confirm = (e) => {
    console.log(e);
    message.success('Click on Yes');
  };
  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
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
                  <th>Vendor Staff Name</th>
                  <th>Email</th>
                  <th>Contact Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>Lorem ipsum</td>
                      <td>staff@gmail.com</td>
                      <td className="ws-nowrap">+234 09-461-4000</td>
                      <td>
                        <div className="tableAction-wrapper">
                          <button className="tableAction-btn btn-view" onClick={()=>{navigate('/vendor-staff-details/id')}}>
                            <AiFillEye />
                          </button>
                          <button className="tableAction-btn btn-edit" onClick={() => {
                              setEditModalOpen(true);
                            }}>
                            <MdEdit />
                          </button>
                          <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this user?"
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
      <div className="row mb-4">
        <div className="col-md-12">
          <TablePagination />
        </div>
      </div>
      <EditVendorStaff
        isModalOpen={isEditModalOpen}
        setIsModalOpen={setEditModalOpen}
      />
    </div>
  );
}

export default VendorStaffList;
