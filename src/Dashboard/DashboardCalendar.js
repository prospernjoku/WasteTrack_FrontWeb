import React from "react";
import { Calendar } from "antd";
import moment from "moment";
function DashboardCalendar() {
  const calendarHeader = () => {
    return (
      <div className="py-2 px-4">
        <p className="mb-0 fw-500 fs-20 heading-color">Calendar</p>
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
    <div className="row">
      <div className="col-md-12 my-2">
        <div className="dashboard-calendar">
          <Calendar
            fullscreen={false}
            fullCellRender={dateFullCellRender}
            headerRender={() => {
              return <div>{calendarHeader()}</div>;
            }}
          />
        </div>
      </div>
      <div className="row my-2 justify-content-center">
        <div className="col-md-auto">
          <p className="fs-16 d-flex align-items-center">
            <span className="status-dots lightRed-dot"></span>Picked Up
          </p>
        </div>
        <div className="col-md-auto">
          <p className="fs-16 d-flex align-items-center">
            <span className="status-dots green-dot"></span>Next Pick Up
          </p>
        </div>
        <div className="col-md-auto">
          <p className="fs-16 d-flex align-items-center">
            <span className="status-dots blue-dot"></span>Upcoming Pick Up
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardCalendar;
