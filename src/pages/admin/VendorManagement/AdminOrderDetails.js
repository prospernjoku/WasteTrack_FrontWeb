import React from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs';
import {LuMapPin} from 'react-icons/lu';
import {BiPhone} from 'react-icons/bi';
import {FaRegUser} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';

function AdminOrderDetails() {
  const breadcrumbItems = [
    { label: "Vendor Management" },
    { label: "Order History", url: "/vendor/order-history" },
    { label: "Order Details" },
  ];
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-md-12">
          <p className="fw-500 fs-22 heading-color">Order Details</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="panel-card secondary-border shadow-none">
            <div className="card-header border-0">
              <p>Order Info</p>
            </div>
            <div className="card-body pb-0">
              <div className="row">
                <div className="col-md-6">
                  <p className=" gray-color fs-16">Order Id</p>
                </div>
                <div className="col-md-6">
                  <p className="fs-16 heading-color">#1234567899874562</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p className=" gray-color fs-16">Date & Time</p>
                </div>
                <div className="col-md-6">
                  <p className="fs-16 heading-color">2 Sept 2023, 11:45AM</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p className=" gray-color fs-16">Payment Method</p>
                </div>
                <div className="col-md-6">
                  <p className="fs-16 heading-color">Credit Card</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p className=" gray-color fs-16">Invoice</p>
                </div>
                <div className="col-md-6">
                  <p className="fs-16 heading-color">12345</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p className=" gray-color fs-16">Status</p>
                </div>
                <div className="col-md-6">
                  <p className="fs-16 heading-color fw-500 warning-color d-flex align-items-center">
                    <span className="status-dots warning-bg me-2"></span>{" "}
                    Pending
                  </p>
                </div>
              </div>
            </div>

            <div className="divider mb-3"></div>
            <div className="card-header border-0">
              <p>Billing Info</p>
            </div>
            <div className="card-body pb-0">
            <div className="row">
              <div className="col-md-12">
                <p className='fs-18 fw-500'>  Enumeral Waste Solutions Limited</p>
              </div>
            </div>
              <div className="row ">
                <div className="col-md-12">
                  <p className="fs-16 heading-color">
                  <span className="primary-color fs-20 me-2"><LuMapPin/></span>
                  abc street, xyz city
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="fs-16 heading-color"> <span className="primary-color fs-20 me-2"><BiPhone/></span>+234 09-461-4000</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                <p className="fs-16 heading-color">
                  <span className="primary-color fs-20 me-2"><FaRegUser/></span>
                  Contact person
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="fs-16 heading-color"><span className="primary-color fs-20 me-2"><HiOutlineMail/></span>vendor@gmail.com</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-8">
          <div className="panel-card secondary-border shadow-none">
            <div className="card-body product-detail-table pb-0">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Qty(in Rolls)</th>
                    <th className="text-end">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-end">
                        <div className="me-2">
                          <img
                            src="/images/BlackBag.png"
                            alt="product-img"
                            height={50}
                          />
                        </div>
                        <p className="fs-18 heading-color">Nylon bags</p>
                      </div>
                    </td>
                    <td className="text-center">
                      <p className="fs-18 heading-color">₦ 379</p>
                    </td>
                    <td className="text-center">
                      <p className="fs-18 heading-color">100</p>
                    </td>
                    <td className="text-end">
                      <p className="fs-18 heading-color">₦ 37900</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="row">
                <div className="col">
                    <p className="fw-500 fs-16 gray-color">Subtotal</p>
                </div>
                <div className="col text-end">
                    <p className="fw-500 gray-color">₦ 37900</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                    <p className="fw-500 fs-16 gray-color">Revised Commissions (10%)</p>
                </div>
                <div className="col text-end">
                    <p className="fw-500 gray-color">₦ 3790</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                    <p className="fw-500 fs-20 heading-color">Total</p>
                </div>
                <div className="col text-end">
                    <p className="fw-500 fs-20 heading-color">₦ 34110</p>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
          <div className="panel-card mt-2 secondary-border shadow-none">
                <div className="card-header border-0">
                  <p>Revenue Share</p>
                </div>
                <div className="card-body pb-0">
                    <div className="row justify-content-between">
                      <div className="col-md-auto">
                        <p className='fs-16'>State Government (25%)</p>
                      </div>
                      <div className="col-md-1">
                        <p className='text-end'>₦8527.50</p>
                      </div>
                    </div>
                    <div className="row justify-content-between">
                      <div className="col-md-auto">
                        <p className='fs-16'>Waste Management Agency (10%)</p>
                      </div>
                      <div className="col-md-1">
                        <p className='text-end'>₦3411.00</p>
                      </div>
                    </div>
                    <div className="row justify-content-between">
                      <div className="col-md-auto">
                        <p className='fs-16'>Environmental Consultant (15%)</p>
                      </div>
                      <div className="col-md-1">
                        <p className='text-end'>₦5116.50</p>
                      </div>
                    </div>
                    <div className="row justify-content-between">
                      <div className="col-md-auto">
                        <p className='fs-16'>Admin (20%)</p>
                      </div>
                      <div className="col-md-1">
                        <p className='text-end'>₦6822.00</p>
                      </div>
                    </div>
                    <div className="row justify-content-between">
                      <div className="col-md-auto">
                        <p className='fs-16'>Waste Management Staff (5%)</p>
                      </div>
                      <div className="col-md-1">
                        <p className='text-end'>₦1705.50</p>
                      </div>
                    </div>
                    <div className="row justify-content-between">
                      <div className="col-md-auto">
                        <p className='fs-16'>Vendor (15%)</p>
                      </div>
                      <div className="col-md-1">
                        <p className='text-end'>₦5116.50</p>
                      </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminOrderDetails