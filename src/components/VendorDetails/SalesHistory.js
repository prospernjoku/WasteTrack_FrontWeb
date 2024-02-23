import React from 'react'
import TableComponents from '../Table/TableComponents'
import TablePagination from '../Table/TablePagination'
import { Link } from 'react-router-dom';

function SalesHistory() {
  return (
    <div>
    <div className="row">
      <div className="col-md-12">
        <TableComponents/>
      </div>
    </div>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((element, index) => {
              return (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>Lorem ipsum</td>
                  <td className='ws-nowrap'>+234 09-461-4000</td>
                  <td>abc street, xyz area</td>
                  <td>50</td>
                  <td className='ws-nowrap'>14/ 09/ 2023, 01:50 PM</td>
                  <td className='ws-nowrap'>
                    <Link to="/" className='primary-color fw-500 fs-16'>View Batch Details</Link>
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
        <TablePagination/>
      </div>
    </div>
</div>
  )
}

export default SalesHistory