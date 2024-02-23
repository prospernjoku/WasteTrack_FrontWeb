import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import TableComponents from "../../../components/Table/TableComponents";
import TablePagination from "../../../components/Table/TablePagination";
import { AiFillEye } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
function InvoicesList() {
    const navigate = useNavigate()
  const breadcrumbItems = [
    { label: "Invoice" }
  ];
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <TableComponents />
      <div className="row my-4">
        <div className="col-md-12">
          <div className="table-wrapper table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Invoice Id</th>
                  <th>Vendor Code</th>
                  <th>Company Name</th>
                  <th>Date & Time</th>
                  <th>Status</th>
                  <th>Total Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>#12345678</td>
                      <td>123456</td>
                      <td>Enumeral Waste Solutions Limited</td>
                      <td>02/ 09/ 2023, 12:45 PM</td>
                      <td><span className="danger-badge">Unpaid</span></td>
                      <td>₦37900.00</td>
                      <td>
                        <div className="tableAction-wrapper">
                          <button className="tableAction-btn btn-view" onClick={()=>navigate('/invoice-view')}>
                            <AiFillEye />
                          </button>
                          <button className="tableAction-btn btn-edit">
                            <FiDownload />
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
        <div className="col-md-12">
          <TablePagination />
        </div>
      </div>
    </div>
  );
}

export default InvoicesList;
