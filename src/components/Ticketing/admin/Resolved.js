import React from 'react'
import TableComponents from '../../Table/TableComponents';
import { Link } from 'react-router-dom';
import TablePagination from '../../Table/TablePagination';

function Resolved() {
  return (
    <div>
    <TableComponents />
    <div className="row my-4">
      <div className="col-md-12">
        <div className="table-wrapper table-responsive">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>Ticket Id</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Date</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((element, index) => {
                return (
                  <tr key={index + 1}>
                    <td>123456</td>
                    <td>Vendor</td>
                    <td>Not able to withdraw money</td>
                    <td className='ws-nowrap'>12 Sept 2023, 12:45 PM</td>
                    <td className='ws-nowrap'>
                      <Link to="/ticket/details/id" className="primary-color">
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
        <TablePagination/>
      </div>
    </div>
  </div>
  )
}

export default Resolved