import React from "react";
import { Select, Space } from "antd";
import { FiSearch } from "react-icons/fi";
import { BiSolidDownArrow } from "react-icons/bi";
import TablePagination from "../Table/TablePagination";
const { Option } = Select;

function AllotedAreas() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-6 select-multiple">
            <span className="search-icon">
              <FiSearch />
            </span>
            <Select
              suffixIcon={<BiSolidDownArrow className="primary-color" />}
              mode="multiple"
              style={{
                width: "100%",
              }}
              placeholder="Search area..."
              onChange={handleChange}
              optionLabelProp="label"
            >
              <Option value="1">
                <Space>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </Space>
              </Option>
              <Option value="2">
                <Space>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </Space>
              </Option>
              <Option value="3">
                <Space>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </Space>
              </Option>
              <Option value="4">
                <Space>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </Space>
              </Option>
              <Option value="5">
                <Space>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </Space>
              </Option>
            </Select>
          </div>
          <div className="col-auto">
            <button className="primary-btn">Assign Area</button>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-12">
            <div className="table-wrapper table-responsive">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>S. No.</th>
                    <th>Area</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(10)].map((element, index) => {
                    return (
                      <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </td>

                        <td>
                          <div className="tableAction-wrapper">
                            <button className="border-0 bg-none text-danger fw-500 fs-18  text-decoration-underline">
                              Unassign
                            </button>
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
            <div className="col-md-12 mb-4">
                <TablePagination/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AllotedAreas;
