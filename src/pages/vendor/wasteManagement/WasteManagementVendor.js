import React, { useState } from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs'
import {LiaFileUploadSolid} from 'react-icons/lia'
import TableComponents from '../../../components/Table/TableComponents';

import TablePagination from '../../../components/Table/TablePagination';
import UploadCollectedWaste from '../../../components/Modals/UploadCollectedWaste';

function WasteManagementVendor() {
    const[uploadCollectionModal ,setUploadCollectionModal] = useState(false)
    const breadcrumbItems = [
        { label: "Waste Management" },
        { label: "Upload waste collection" },
      ];
   
  return (
    <div className='container-fluid'>
        <Breadcrumbs items={breadcrumbItems} />
        <div className="row mb-3">
            <div className="col-md-12">
                <button className='primary-btn' onClick={()=>setUploadCollectionModal(true)}><LiaFileUploadSolid className='fs-4 mb-1'/>Upload Collected Nylons</button>
            </div>
        </div>
        <TableComponents/>
        <div className="row my-3">
            <div className="col-md-12">
            <div className="table-wrapper table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Serial Number</th>
                  <th>Batch Number</th>
                  <th>Collection Date</th>
                  <th>Buyer Name</th>
                  <th>Buyer Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>HCXC8849287896</td>
                      <td>7478939857564</td>
                      <td className='ws-nowrap'>02/ 09/ 2023, 12:45 PM</td>
                      <td>Lorem ipsum</td>
                      <td>pqr colony, abc area, xyz city</td>
                      <td>-</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
            </div>
        </div>
        <TablePagination/>
        <UploadCollectedWaste isModalOpen={uploadCollectionModal} setIsModalOpen={setUploadCollectionModal}/>
    </div>
  )
}

export default WasteManagementVendor