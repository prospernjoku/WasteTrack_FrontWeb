import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs';
import TablePagination from '../../components/Table/TablePagination';
import TableComponents from '../../components/Table/TableComponents';

function VendorStaffCollectedWaste() {
  const breadcrumbItems = [
    { label: "Waste Management" },
    { label: "Collected Waste Report" }
  ];
  return (
    <div className='container-fluid'>
    <Breadcrumbs items={breadcrumbItems} />
    <div className="row">
    <TableComponents/>
    </div>
    <div className="row my-4">
    <div className="col-md-12">
      <div className="table-wrapper table-responsive">
        <table className="table mb-0">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Serial Number</th>
              <th>Batch Number</th>
              <th>Buyer Name</th>
              <th>Contact Number</th>
              <th>Collection Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((element, index) => {
              return (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>HXC8849287896</td>
                  <td>7478939857564</td>
                  <td>Lorem ipsum</td>
                  <td className='ws-nowrap'>+234 09-461-4000</td>
                  <td className='ws-nowrap'>06/ 09/ 2023, 02:45 PM</td>
                  <td>
                    <span className="warning-badge">Pending</span>
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
      <TablePagination/>
    </div>
  </div>
</div>
  )
}

export default VendorStaffCollectedWaste