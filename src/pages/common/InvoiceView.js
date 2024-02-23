import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { FiPrinter } from "react-icons/fi";

function InvoiceView() {
  const breadcrumbItems = [
    { label: "payments" },
    { label: "payment history", url: "/payment-history" },
    { label: "invoice" },
  ];
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row justify-content-between my-2">
        <div className="col-md-auto">
          <p className="fw-500 fs-22 heading-color">Invoice View</p>
        </div>
        <div className="col-md-auto">
          <button
            className="primary-outline-btn border-2"
          >
            <FiPrinter className="me-2" />
            Print
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12">
            <div className="panel-card mb-4">
              <div className="card-body p-4">
                <div className="row justify-content-between align-items-end">
                  <div className="col-12 d-flex align-items-start">
                    <img src="/images/logo.png" alt="logo-img" height={50} />
                  </div>
                </div>
                <div className="row justify-content-md-between mt-4">
                  <div className="col-md-auto">
                    <p className="heading-color fs-20 fw-bold mb-2">
                      Invoice number
                    </p>
                    <p className="gray-color mb-0">IN-05866</p>
                  </div>
                  <div className="col-md-auto text-md-end">
                    <p className="heading-color fs-20 fw-bold mb-2">
                      Invoice Date
                    </p>
                    <p className="gray-color mb-0">2nd Oct 2019 03:16 PM</p>
                  </div>
                </div>
                <div className="divider-gray my-4"></div>
                <div className="row justify-content-md-between">
                  <div className="col-md-auto">
                    <p className="heading-color fs-20 fw-bold">Invoice From</p>
                    <p className="mb-2 gray-color fs-16">Waste Track</p>
                    <p className="mb-2 gray-color fs-16">Company address</p>
                    <p className="mb-2 gray-color fs-16">
                      City, Country - 00000
                    </p>
                    <p className="mb-2 gray-color fs-16">(+234) 09-461-4000</p>
                    <p className="mb-2 gray-color fs-16">
                      wastetrack@gmail.com
                    </p>
                  </div>
                  <div className="col-md-auto  text-end">
                    <p className="heading-color fs-20 fw-bold">Invoice To</p>
                    <p className="mb-2 gray-color fs-16">
                      Enumeral Waste Solutions Limited
                    </p>
                    <p className="mb-2 gray-color fs-16">Company address</p>
                    <p className="mb-2 gray-color fs-16">
                      City, Country - 00000
                    </p>
                    <p className="mb-2 gray-color fs-16">(+234) 09-461-4000</p>
                    <p className="mb-2 gray-color fs-16">
                      enumeralwaste@gmail.com
                    </p>
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-md-12">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>
                            <p className="mb-0 fw-500 gray-color fs-16">
                              Description
                            </p>
                          </th>
                          <th className="text-center">
                            <p className="mb-0 fw-500 gray-color fs-16">Rate</p>
                          </th>
                          <th className="text-center">
                            <p className="mb-0 fw-500 gray-color fs-16">
                              Quantity
                            </p>
                          </th>
                          <th className="col-3 text-end">
                            <p className="mb-0 fw-500 gray-color fs-16">
                              Amount
                            </p>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <p className="fw-500 heading-color mb-0 fs-16">
                              Nylon Rolls
                            </p>
                          </td>
                          <td className="text-center">
                            <p className="fw-500 heading-color mb-0 fs-16">
                              ₦758.00
                            </p>
                          </td>
                          <td className="text-center">
                            <p className="fw-500 heading-color mb-0 fs-16">
                              50
                            </p>
                          </td>
                          <td className="text-end">
                            <p className="fw-500 heading-color mb-0 fs-16">
                              ₦37,900.00
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-end">
                    <p className="fs-16 mb-3">Subtotal : ₦37,900.00</p>
                    <p className="fs-16 mb-3">Taxes : ₦2,842.00</p>
                    <p className="fs-16 fw-500 mb-3">Total : ₦40,742.00</p>
                  </div>
                </div>
                <div className="row justify-content-between align-items-end">
                  <div className="col-md-auto">
                    <p className="primary-color fw-500 mb-0">BANK DETAILS</p>
                    <p className="mb-0 gray-color">Bank Transfer</p>
                    <p className="mb-0 gray-color">
                      Bank name: ABC Bank limited
                    </p>
                    <p className="mb-0 gray-color">SWIFT/IBAN: NZ0201230012</p>
                    <p className="mb-0 gray-color">
                      Account number: 12-1234-123456-12
                    </p>
                    <p className="mb-0 gray-color">
                      Please use INV-057 as a reference number
                    </p>
                  </div>
                  <div className="col-md-auto">
                    <p className="mb-0 fw-500">Thanks for the business.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceView;
