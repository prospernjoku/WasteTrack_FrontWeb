import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";

function Orderdetails() {
  const breadcrumbItems = [
    { label: "Order Management" },
    { label: "My Orders", url: "/order/history" },
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
        <div className="col-md-6 col-lg-4 my-2">
          <div className="panel-card secondary-border shadow-none">
            <div className="card-header border-0">
              <p>Order Info</p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col col-md-5">
                  <p className=" gray-color fs-16">Order Id</p>
                </div>
                <div className="col col-md-7">
                  <p className="fs-16 heading-color">#1234567899874562</p>
                </div>
              </div>
              <div className="row">
                <div className="col col-md-5">
                  <p className=" gray-color fs-16">Date & Time</p>
                </div>
                <div className="col col-md-7">
                  <p className="fs-16 heading-color">2 Sept 2023, 11:45AM</p>
                </div>
              </div>
              <div className="row">
                <div className="col col-md-5">
                  <p className=" gray-color fs-16">Payment Method</p>
                </div>
                <div className="col col-md-7">
                  <p className="fs-16 heading-color">Credit Card</p>
                </div>
              </div>
              <div className="row">
                <div className="col col-md-5">
                  <p className=" gray-color fs-16">Invoice</p>
                </div>
                <div className="col col-md-7">
                  <p className="fs-16 heading-color">12345</p>
                </div>
              </div>
              <div className="row">
                <div className="col col-md-5">
                  <p className=" gray-color fs-16">Status</p>
                </div>
                <div className="col col-md-7">
                  <p className="fs-16 heading-color fw-500 primary-color d-flex align-items-center">
                    <span className="status-dots primary-bg me-2"></span>
                    Completed
                  </p>
                </div>
              </div>
            </div>
            <div className="divider mb-3"></div>
            <div className="card-header border-0">
              <p>Billing Info</p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col col-md-5">
                  <p className=" gray-color fs-16">Company Name </p>
                </div>
                <div className="col col-md-7">
                  <p className="fs-16 heading-color">
                    Enumeral Waste Solutions Limited
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col col-md-5">
                  <p className=" gray-color fs-16">Person Name</p>
                </div>
                <div className="col col-md-7">
                  <p className="fs-16 heading-color">Contact person</p>
                </div>
              </div>
              <div className="row">
                <div className="col col-md-5">
                  <p className=" gray-color fs-16">Mobile No.</p>
                </div>
                <div className="col col-md-7">
                  <p className="fs-16 heading-color">+234 09-461-4000</p>
                </div>
              </div>
              <div className="row">
                <div className="col col-md-5">
                  <p className=" gray-color fs-16">Email</p>
                </div>
                <div className="col col-md-7">
                  <p className="fs-16 heading-color">vendor@gmail.com</p>
                </div>
              </div>
              <div className="row">
                <div className="col col-md-5">
                  <p className="gray-color fs-16">Address </p>
                </div>
                <div className="col col-md-7">
                  <p className="fs-16 heading-color">abc street, xyz city</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-8 my-2">
          <div className="panel-card secondary-border shadow-none">
            <div className="card-body product-detail-table table-responsive">
              <table className="table order-details-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th className="text-center">Price</th>
                    <th className="text-center ws-nowrap">Qty(in Rolls)</th>
                    <th className="text-end">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="ws-nowrap">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img
                            src="/images/BlackBag.png"
                            alt="product-img"
                            height={50}
                          />
                        </div>
                        <p className="fs-18 heading-color mb-0">Nylon bags</p>
                      </div>
                    </td>
                    <td className="text-center ws-nowrap">
                      <p className="fs-18 heading-color mb-0">₦ 379</p>
                    </td>
                    <td className="text-center">
                      <p className="fs-18 heading-color mb-0">100</p>
                    </td>
                    <td className="text-end ws-nowrap">
                      <p className="fs-18 heading-color mb-0">₦ 37900</p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="order-details-data">
                <div className="row justify-content-between align-items-center">
                  <div className="col-auto">
                    <p className="fs-16 heading-color fw-500 mb-0">Product</p>
                  </div>
                  <div className="col-auto d-flex align-items-center">
                    <img
                      src="/images/BlackBag.png"
                      alt="product-img"
                      height={50}
                    />
                    <p className="fs-16 heading-color mb-0">Nylon bags</p>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-auto">
                    <p className="fs-16 heading-color fw-500">Price</p>
                  </div>
                  <div className="col-auto">
                    <p className="fs-16 heading-color">₦ 379</p>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-auto">
                    <p className="fs-16 heading-color fw-500">Qty(in Rolls)</p>
                  </div>
                  <div className="col-auto">
                    <p className="fs-16 heading-color">100</p>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-auto">
                    <p className="fs-16 heading-color fw-500">Amount</p>
                  </div>
                  <div className="col-auto">
                    <p className="fs-16 heading-color">₦ 379</p>
                  </div>
                </div>
                <div className="divider mb-3"></div>
              </div>
              <div className="row justify-content-between">
                <div className="col-auto">
                  <p className="fw-500 fs-16 gray-color">Subtotal</p>
                </div>
                <div className="col-auto">
                  <p className="fw-500 gray-color">₦ 37900</p>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-auto">
                  <p className="fw-500 fs-16 gray-color">
                    Revised Commissions (10%)
                  </p>
                </div>
                <div className="col-auto">
                  <p className="fw-500 gray-color">₦ 3790</p>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-auto">
                  <p className="fw-500 fs-20 heading-color">Total</p>
                </div>
                <div className="col-auto">
                  <p className="fw-500 fs-20 heading-color">₦ 37900</p>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orderdetails;
