import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import moment from "moment";
import { Calendar } from "antd";

function ScheduleCalendar() {
  const breadcrumbItems = [{ label: "Calendar" }];
  const calendarHeader = () => {
    return (
      <div className="py-2">
        <div className="d-flex justify-content-between">
          <div>
            <p className="mb-0 fw-bold fs-20 heading-color">Next Pickup Date</p>
            <p className="primary-color fw-bold fs-18">17 / 09 / 2023</p>
          </div>
          <div className="col-md-auto mx-5">
            <button className="calendar-btn me-2">
              <LiaAngleLeftSolid />
            </button>
            <button className="calendar-btn">
              <LiaAngleRightSolid />
            </button>
          </div>
        </div>

        <p className="text-center fw-500 fs-20 heading-color">
          {moment().format("MMMM")}
        </p>
      </div>
    );
  };
  const getDateStatus = (date) => {
    const today = moment();
    const dayOfWeek = date.day();
    if ((dayOfWeek === 3 || dayOfWeek === 6) && date.isBefore(today, "day")) {
      // Past date
      return "past";
    } else if (
      (dayOfWeek === 3 || dayOfWeek === 6) &&
      date.diff(today, "days") === 1
    ) {
      // Next Wednesday or Saturday
      return "next";
    }
    if ((dayOfWeek === 3 || dayOfWeek === 6) && date.diff(today, "days") > 0) {
      // Upcoming Wednesday or Saturday
      return "upcoming";
    }

    // Default: Not a relevant date
    return "normal";
  };
  const dateFullCellRender = (date) => {
    const dateStatus = getDateStatus(date);

    let cellClass = "";

    // Apply classes based on date status
    switch (dateStatus) {
      case "past":
        cellClass = "lightRed-dot";
        break;
      case "next":
        cellClass = "green-dot";
        break;
      case "upcoming":
        cellClass = "blue-dot";
        break;
      default:
        cellClass = "";
        break;
    }

    return (
      <div className="d-flex justify-content-center">
        <span className={`calendar-badge ${cellClass}`}>{date.date()}</span>
      </div>
    );
  };
  return (
    <div className="container-fluid">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="row my-3">
        <div className="col-lg-4">
          <div className="row">
            <div className="col-md-12">
              <p className="fs-18 heading-color fw-500 mb-0">
                Upcoming Schedules
              </p>
              <p className="fw-500 gray-light fs-14 letter-spacing-1">
                Remindar Time Table
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 pe-5 border-end">
              <div className="row align-items-end my-3">
                <div className="col-auto">
                  <p className="mb-0 fw-500 gray-light">10:00 AM </p>
                </div>
                <div className="col">
                  <div className="row lavendar-bg border-radius-18 p-2 align-items-center">
                    <div className="col-auto">
                      <span className="calendar-dots lavendar-dot"></span>
                    </div>
                    <div className="col">
                      <p className="mb-0 fs-18 fw-500">Tuesday</p>
                      <p className="mb-0 fs-14 fw-500 gray-light">
                        16 sept 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-end my-3">
                <div className="col-auto">
                  <p className="mb-0 fw-500 gray-light">7:00 AM </p>
                </div>
                <div className="col">
                  <div className="row green-bg border-radius-18 p-2 align-items-center">
                    <div className="col-auto">
                      <span className="calendar-dots green-dot"></span>
                    </div>
                    <div className="col">
                      <p className="mb-0 fs-18 fw-500">Wednesday</p>
                      <p className="mb-0 fs-14 fw-500 gray-light">
                        17 sept 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-end my-3">
                <div className="col-auto">
                  <p className="mb-0 fw-500 gray-light">10:00 AM </p>
                </div>
                <div className="col">
                  <div className="row lavendar-bg border-radius-18 p-2 align-items-center">
                    <div className="col-auto">
                      <span className="calendar-dots lavendar-dot"></span>
                    </div>
                    <div className="col">
                      <p className="mb-0 fs-18 fw-500">Friday</p>
                      <p className="mb-0 fs-14 fw-500 gray-light">
                        19 sept 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-end my-3">
                <div className="col-auto">
                  <p className="mb-0 fw-500 gray-light">7:00 AM </p>
                </div>
                <div className="col">
                  <div className="row blue-bg border-radius-18 p-2 align-items-center">
                    <div className="col-auto">
                      <span className="calendar-dots blue-dot"></span>
                    </div>
                    <div className="col">
                      <p className="mb-0 fs-18 fw-500">Saturday</p>
                      <p className="mb-0 fs-14 fw-500 gray-light">
                        20 sept 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-end my-3">
                <div className="col-auto">
                  <p className="mb-0 fw-500 gray-light">10:00 AM </p>
                </div>
                <div className="col">
                  <div className="row lavendar-bg border-radius-18 p-2 align-items-center">
                    <div className="col-auto">
                      <span className="calendar-dots lavendar-dot"></span>
                    </div>
                    <div className="col">
                      <p className="mb-0 fs-18 fw-500">Tuesday</p>
                      <p className="mb-0 fs-14 fw-500 gray-light">
                        23 sept 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-end my-3 ">
                <div className="col-auto">
                  <p className="mb-0 fw-500 gray-light">7:00 AM </p>
                </div>
                <div className="col">
                  <div className="row blue-bg border-radius-18 p-2 align-items-center">
                    <div className="col-auto">
                      <span className="calendar-dots blue-dot"></span>
                    </div>
                    <div className="col">
                      <p className="mb-0 fs-18 fw-500">Wednesday</p>
                      <p className="mb-0 fs-14 fw-500 gray-light">
                        24 sept 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="calendar-wrapper">
            <Calendar
              fullscreen={false}
              fullCellRender={dateFullCellRender}
              headerRender={() => {
                return <div>{calendarHeader()}</div>;
              }}
            />
            <div className="row justify-content-around my-3">
              <div className="col-auto">
                <p className="fs-18 d-flex align-items-center">
                  <span className="status-dots lavendar-dot"></span>Before
                  Pickup Reminder
                </p>
              </div>
              <div className="col-auto">
                <p className="fs-18 d-flex align-items-center">
                  <span className="status-dots lightRed-dot"></span>Picked Up
                </p>
              </div>
              <div className="col-auto">
                <p className="fs-18 d-flex align-items-center">
                  <span className="status-dots green-dot"></span>Next Pick Up
                </p>
              </div>
              <div className="col-auto">
                <p className="fs-18 d-flex align-items-center">
                  <span className="status-dots blue-dot"></span>Upcoming Pick Up
                </p>
              </div>
            </div>
          </div>

          {/* <CustomCalendar /> */}
        </div>
      </div>
    </div>
  );
}

export default ScheduleCalendar;
