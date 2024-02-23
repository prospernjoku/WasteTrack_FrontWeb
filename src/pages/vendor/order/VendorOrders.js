import React from 'react'
import TableComponents from "../../../components/Table/TableComponents"
import { AiFillEye } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import TablePagination from '../../../components/Table/TablePagination';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../../components/Breadcrumbs';

function VendorOrders() {
  const navigate = useNavigate()
  const breadcrumbItems = [
    { label: "Order Management" },
    { label: "My Orders" },
  ];
  return (
    <div className='container-fluid'>
    <Breadcrumbs items={breadcrumbItems} />
        <div className="row mt-3">
            <div className="col-md my-2">
                <div className="top-details-card">
                    <p className='fs-20 fw-500 heading-color mb-0'>Orders Pending</p> 
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='fs-45 fw-500 mb-0 heading-color'>50</p>
                        <div className='top-card-icon'>
                            <img src="/images/icons/pending.svg" alt="pending-icon"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md my-2">
            <div className="top-details-card">
                    <p className='fs-20 fw-500 heading-color mb-0'>Orders Completed</p> 
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='fs-45 fw-500 mb-0 heading-color'>50</p>
                        <div className='top-card-icon'>
                            <img src="/images/icons/completed.svg" alt="completed-icon"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md my-2">
            <div className="top-details-card">
                    <p className='fs-20 fw-500 heading-color mb-0'>Orders Confirmed</p> 
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='fs-45 fw-500 mb-0 heading-color'>50</p>
                        <div className='top-card-icon'>
                            <img src="/images/icons/confirmed.svg" alt="confirmed-icon"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md my-2">
            <div className="top-details-card">
                    <p className='fs-20 fw-500 heading-color mb-0'>Orders Canceled</p> 
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='fs-45 fw-500 mb-0 heading-color'>50</p>
                        <div className='top-card-icon'>
                            <img src="/images/icons/canceled.svg" alt="canceled-icon"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md my-2">
            <div className="top-details-card">
                    <p className='fs-20 fw-500 heading-color mb-0'>Orders Refunded</p> 
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='fs-45 fw-500 mb-0 heading-color'>50</p>
                        <div className='top-card-icon'>
                            <img src="/images/icons/refunded.svg" alt="refunded-icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row my-3">
            <div className="col-md-12">
                <TableComponents/>
            </div>
        </div>
        <div className="row my-3">
        <div className="col-md-12">
          <div className="table-wrapper table-responsive">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Order Id</th>
                  <th>Order Date</th>
                  <th>Quantity (Rolls)</th>
                  <th>Amount</th>
                  <th>Payment Status</th>
                  <th>Order Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((element, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>#12345678</td>
                      <td className='ws-nowrap'>2 Sept 2023</td>
                      <td>50</td>
                      <td className='ws-nowrap'>₦ 37900.00</td>
                      <td>Paid</td>
                      <td><span className='warning-badge'>Pending</span></td>
                      <td className=" ">
                        <div className="d-flex">
                          <button className="tableAction-btn btn-view" onClick={()=>{navigate('/order/details/id')}}>
                            <AiFillEye />
                          </button>
                          <button className="tableAction-btn btn-download">
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
      <div className="row mb-4">
        <div className="col-md-12">
          <TablePagination />
        </div>
      </div>
    </div>
  )
}

export default VendorOrders