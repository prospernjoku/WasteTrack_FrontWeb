import React from "react";
import { Select } from "antd";
import { FiSearch } from "react-icons/fi";
import { BiFilterAlt, BiSolidDownArrow } from "react-icons/bi";

function TableComponents() {
  return (
    <div className="row align-items-center justify-content-between tableTop-wrapper">
      <div className="col-md-auto my-2 page-selector">
        <Select
          suffixIcon={<BiSolidDownArrow className="primary-color" />}
          value="100 / Page"
          options={[
            {
              value: "100",
              label: "100 / Page",
            },
            {
              value: "200",
              label: "200 / Page",
            },
            {
              value: "300",
              label: "300 / Page",
            },
          ]}
        />
      </div>
      <div className="col-md-auto">
        <div className="row">
          <div className="col-md-auto my-2">
            <div className="search-input-container">
              <span className="search-icon">
                <FiSearch className="primary-color" />
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="search-input"
              />
            </div>
          </div>
          <div className="col-md-auto my-2">
            <div className="filter-selector">
              <span className="filter-icon">
                <BiFilterAlt className="primary-color" />
              </span>
              <Select
                suffixIcon={<BiSolidDownArrow className="primary-color" />}
                placeholder="Filter By"
                options={[
                  {
                    value: "name",
                    label: "Name",
                  },
                  {
                    value: "email",
                    label: "Email",
                  },
                  {
                    value: "designation",
                    label: "Designation",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableComponents;
