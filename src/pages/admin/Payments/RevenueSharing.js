import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { Form, Input } from "antd";

function RevenueSharing() {
  const breadcrumbItems = [{ label: "Payment" }, { label: "Revenue Sharing" }];
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row">
        <div className="col-md-12">
          <p className="fs-22 primary-color fw-500">Current Share</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md col-lg my-2">
          <div className="panel-card h-100">
            <div className="card-body text-center p-2 d-flex flex-column justify-content-around h-100">
              <p className="fs-18 gray-color fw-500 mb-0">Admin</p>
              <p className="fs-45 mb-0 fw-500 primary-color">20%</p>
            </div>
          </div>
        </div>
        <div className="col-md col-lg my-2">
          <div className="panel-card h-100">
            <div className="card-body text-center p-2 d-flex flex-column justify-content-around h-100">
              <p className="fs-18 gray-color fw-500 mb-0">State Government</p>
              <p className="fs-45 mb-0 fw-500 primary-color">25%</p>
            </div>
          </div>
        </div>
        <div className="col-md col-lg my-2">
          <div className="panel-card h-100">
            <div className="card-body text-center p-2 d-flex flex-column justify-content-around h-100">
              <p className="fs-18 gray-color fw-500 mb-0">Waste Management Agency</p>
              <p className="fs-45 mb-0 fw-500 primary-color">10%</p>
            </div>
          </div>
        </div>
        <div className="col-md col-lg my-2">
          <div className="panel-card h-100">
            <div className="card-body text-center p-2 d-flex flex-column justify-content-around h-100">
              <p className="fs-18 gray-color fw-500 mb-0">Enviornmental Consultants</p>
              <p className="fs-45 mb-0 fw-500 primary-color">15%</p>
            </div>
          </div>
        </div>
        <div className="col-md col-lg my-2">
          <div className="panel-card h-100">
            <div className="card-body text-center p-2 d-flex flex-column justify-content-around h-100">
              <p className="fs-18 gray-color fw-500 mb-0">Vendors</p>
              <p className="fs-45 mb-0 fw-500 primary-color">15%</p>
            </div>
          </div>
        </div>
        <div className="col-md col-lg my-2">
          <div className="panel-card h-100">
            <div className="card-body text-center p-2 d-flex flex-column justify-content-around h-100">
              <p className="fs-18 gray-color fw-500 mb-0">Waste Management Staff</p>
              <p className="fs-45 mb-0 fw-500 primary-color">5%</p>
            </div>
          </div>
        </div>
        <div className="col-md col-lg my-2">
          <div className="panel-card h-100">
            <div className="card-body text-center p-2 d-flex flex-column justify-content-around h-100">
              <p className="fs-18 gray-color fw-500 mb-0">Waste Management Staff</p>
              <p className="fs-45 mb-0 fw-500 primary-color">5%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-12">
          <p className="fs-22 primary-color fw-500 mb-0">Change Share</p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-5">
          <div className="revenue-sharing-card">
            <Form>
              <div className="row">
                <div className="col-sm">
                  <p className="mb-0 fs-18 fw-500" >State Government Agency</p>
                </div>
                <div className="col-sm-3 d-flex">
                  <Form.Item>
                    <Input />
                  </Form.Item>
                  <span className="fs-22 ms-2">%</span>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <p className="mb-0 fs-18 fw-500" >Nylon Production Company</p>
                </div>
                <div className="col-sm-3 d-flex">
                  <Form.Item>
                    <Input />
                  </Form.Item>
                  <span className="fs-22 ms-2">%</span>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <p className="mb-0 fs-18 fw-500" >Enviornmental Consultants</p>
                </div>
                <div className="col-sm-3 d-flex">
                  <Form.Item>
                    <Input />
                  </Form.Item>
                  <span className="fs-22 ms-2">%</span>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <p className="mb-0 fs-18 fw-500" >Waste Management Agency</p>
                </div>
                <div className="col-sm-3 d-flex">
                  <Form.Item>
                    <Input />
                  </Form.Item>
                  <span className="fs-22 ms-2">%</span>
                </div>
              
              </div>
              <div className="row">
                <div className="col-sm">
                  <p className="mb-0 fs-18 fw-500" >Vendor Purchase</p>
                </div>
                <div className="col-sm-3 d-flex">
                  <Form.Item>
                    <Input />
                  </Form.Item>
                  <span className="fs-22 ms-2">%</span>
                </div>
              
              </div>
              <div className="row">
                <div className="col-sm">
                  <p className="mb-0 fs-18 fw-500" >Vendor Pickup</p>
                </div>
                <div className="col-sm-3 d-flex">
                  <Form.Item>
                    <Input />
                  </Form.Item>
                  <span className="fs-22 ms-2">%</span>
                </div>
              
              </div>
              <div className="row">
                <div className="col-sm">
                  <p className="mb-0 fs-18 fw-500">Enforcement Team</p>
                </div>
                <div className="col-sm-3 d-flex">
                  <Form.Item>
                    <Input />
                  </Form.Item>
                  <span className="fs-22 ms-2">%</span>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                    <button className="primary-btn">Save Changes</button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevenueSharing;
