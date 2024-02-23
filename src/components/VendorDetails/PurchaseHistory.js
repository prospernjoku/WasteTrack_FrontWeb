import React from 'react'
import TableComponents from '../Table/TableComponents'
import TablePagination from '../Table/TablePagination'
import { Link } from 'react-router-dom';

function PurchaseHistory() {
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
                  <th>Order Id</th>
                  <th>Order Date</th>
                  <th>Pickup Date</th>
                  <th>Quantity (Rolls)</th>
                  <th>Total Amount Paid</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>12345678901234</td>
                      <td className='ws-nowrap'>11/ 09/ 2023, 11:45 PM</td>
                      <td className='ws-nowrap'>15/ 09/ 2023, 11:45 PM</td>
                      <td>50</td>
                      <td className='ws-nowrap'>₦ 758,000.00</td>
                      <td >
                        <Link to="/" className='primary-color fw-500 fs-16 ws-nowrap'>View Batch Details</Link>
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

export default PurchaseHistory