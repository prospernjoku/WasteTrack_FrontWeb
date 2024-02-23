import React from 'react'
import TableComponents from '../Table/TableComponents'
import TablePagination from '../Table/TablePagination'
import { Link } from 'react-router-dom';

function TicketsResolved() {
  return (
    <div>
    <TableComponents />
    <div className="row my-4">
      <div className="col-md-12">
        <div className="table-wrapper table-responsive">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Ticket Id</th>
                <th>Ticket Creator Name</th>
                <th>Subject</th>
                <th>Resolved on</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((element, index) => {
                return (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>123456</td>
                    <td>Lorem ipsum</td>
                    <td>Not able to withdraw money</td>
                    <td className='ws-nowrap'>02/ 09/ 2023, 12:45 PM</td>
                    <td className='ws-nowrap'>
                    <Link
                        to="/ticket/details/id"
                        className="primary-color fs-16 fw-500"
                      >
                        View Details
                      </Link>
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
  )
}

export default TicketsResolved