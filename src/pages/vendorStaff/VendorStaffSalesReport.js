import React, { useState } from "react";
import TableComponents from "../../components/Table/TableComponents";
import Breadcrumbs from "../../components/Breadcrumbs";
import UploadSalesReport from "../../components/Modals/UploadSalesReport";
import TablePagination from "../../components/Table/TablePagination";

function VendorStaffSalesReport() {
    const breadcrumbItems = [{ label: "Sales Report" }];
    const[uploadCollectionModal ,setUploadCollectionModal] = useState(false)
  return (
    <div className="container-fluid">
    <Breadcrumbs items={breadcrumbItems} />
    {/* <div className="row">
      <div className="col-md-12 mb-3">
        <button className="primary-btn" onClick={()=>{setUploadCollectionModal(true)}}>
          <LiaFileUploadSolid className="fs-4 mb-1" />
          Upload Collected Nylons
        </button>
      </div>
    </div> */}
    <TableComponents />
    <div className="row my-4">
      <div className="col-md-12">
        <div className="table-wrapper table-responsive">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Buyer Name</th>
                <th>Contact Number</th>
                <th>Address</th>
                <th>Quantity (Rolls)</th>
                <th>Date of Purchase</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((element, index) => {
                return (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>Lorem ipsum</td>
                    <td className="ws-nowrap">+234 09-461-4000</td>
                    <td>abc street, xyz area</td>
                    <td>10</td>
                    <td className="ws-nowrap">14/ 09/ 2023, 01:50 PM</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <TablePagination/>
    <UploadSalesReport isModalOpen={uploadCollectionModal} setIsModalOpen={setUploadCollectionModal}/>
  </div>
  )
}

export default VendorStaffSalesReport