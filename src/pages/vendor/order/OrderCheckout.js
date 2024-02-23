import React, { useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { Form, Radio, Input,Space  } from "antd";

function OrderCheckout() {
  const [form] = Form.useForm();
  const [qtyValue, setQtyValue] = useState(1);

  const breadcrumbItems = [
    { label: "Order Management" },
    { label: "Buy Nylon", url: "/nylon/buy" },
    { label: "Checkout" },
  ];

  const incrementQtyValue = (e) => {
    if (qtyValue < 999) {
      setQtyValue((previous) => parseInt(previous) + 1);
    }
  };
  const decrementQtyValue = (e) => {
    if (qtyValue > 0) {
      setQtyValue((previous) => parseInt(previous) - 1);
    }
  };
  const handleQtyChange = (e) => {
    var userInput = parseInt(e.target.value);
    if (isNaN(userInput) || userInput < 1 || userInput > 999) {
      e.preventDefault();
      return;
    } else {
      setQtyValue(userInput);
    }
  };
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-md-6 col-lg-8">
          <div className="panel-card primary-border">
            <div className="card-body product-detail-table">
              <table className="table">
                <thead className="">
                  <tr>
                    <th>Product</th>
                    <th>Product Name</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Qty(in Rolls)</th>
                    <th className="text-end">Amount</th>
                    <th className="text-end">Action</th>
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
                      </div>
                    </td>
                    <td>
                      <p className="fs-18 hading-color mb-0">Nylon bags</p>
                    </td>
                    <td className="text-center">
                      <p className="fs-18 heading-color mb-0">₦ 379</p>
                    </td>
                    <td className="text-end">
                      <div className="quantity">
                        <button
                          className="quantity__minus"
                          onClick={() => decrementQtyValue()}
                        >
                          -
                        </button>
                        <input
                          name="quantity"
                          type="number"
                          className="quantity__input"
                          min={1}
                          max={999}
                          onChange={(e) => {
                            handleQtyChange(e);
                          }}
                          value={qtyValue}
                        />
                        <button
                          className="quantity__plus"
                          onClick={() => incrementQtyValue()}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-end">
                      <p className="fs-18 heading-color mb-0">₦ 37900</p>
                    </td>
                    <td className="text-end">
                      <button className="btn btn-sm fs-18 btn-danger">
                        <RiDeleteBin6Line className="fs-22 align-text-bottom" />
                      </button>
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
                  <p className="fw-500 fs-16 gray-color">
                    Revised Commissions (10%)
                  </p>
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
          </div>
          <div className="panel-card primary-border my-3">
            <div className="card-header border-0">
              <p>Billing Details</p>
            </div>
            <div className="card-body form-sm-custom-style border-0 bg-none">
              <Form form={form} layout="vertical">
                <div className="row">
                  <div className="col-md-12 rounded-radio-btn">
                    <Form.Item label="Checkout Options" name="checkout_option">
                      <Radio.Group>
                        <Radio value={1}>Use my existing address</Radio>
                        <Radio value={2}>Add new Address</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <Form.Item label="First Name" name="first_name">
                      <Input placeholder="First Name" />
                    </Form.Item>
                  </div>
                  <div className="col-lg-6">
                    <Form.Item label="Last Name" name="last_name">
                      <Input placeholder="Last Name" />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <Form.Item label="Company Name" name="company_name">
                      <Input placeholder="Company Name" />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <Form.Item label="Company Address" name="company_address">
                      <Input.TextArea rows={3} placeholder="Company Address" />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <button className="form-btn">Place Order</button>
                </div>
              </div>
              </Form>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="panel-card primary-border">
            <div className="card-header border-0">
              <p>Address</p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <p className="fs-16 fw-500 heading-color mb-0">
                    Enumeral Waste Solutions Limited
                  </p>
                </div>
              </div>
              <div className="row align-items-center my-2">
                <div className="col-1">
                  <span className="fs-18 primary-color">
                    <HiOutlineLocationMarker />
                  </span>
                </div>
                <div className="col">
                  <p className="mb-0 fs-16 gray-color">abc street, xyz city</p>
                </div>
              </div>
              <div className="row align-items-center my-2">
                <div className="col-1">
                  <span className="fs-18 primary-color">
                    <BsTelephone />
                  </span>
                </div>
                <div className="col">
                  <p className="mb-0 fs-16 gray-color">+234 09-461-4000</p>
                </div>
              </div>
              <div className="row align-items-center my-2">
                <div className="col-1">
                  <span className="fs-18 primary-color">
                    <FaRegUser />
                  </span>
                </div>
                <div className="col">
                  <p className="mb-0 fs-16 gray-color">Contact Person</p>
                </div>
              </div>
              <div className="row align-items-center my-2">
                <div className="col-1">
                  <span className="fs-18 primary-color">
                    <FiMail />
                  </span>
                </div>
                <div className="col">
                  <p className="mb-0 fs-16 gray-color">vendor@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-card my-3 primary-border">
            <div className="card-header border-0">
              <p>Payment Method</p>
              <span className="fs-14 fw-500 gray-light">
                Please select the preferred payment method to use on this order.
              </span>
            </div>
            <div className="card-body rounded-radio-btn">
              <Radio.Group>
              <Space direction="vertical">
                <Radio value={1}>Pay Now</Radio>
                <Radio value={2}>Pay on pickup</Radio>
                </Space>
              </Radio.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCheckout;
