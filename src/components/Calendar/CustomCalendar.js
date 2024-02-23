import React, { useState } from "react";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

function CustomCalendar() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentDate, setCurrentDate] = useState(new Date());
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };
  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayOfMonth = getFirstDayOfMonth(currentDate);
  const dayData=[
    {date : 2,key:"picked_up"},
    {date : 6,key:"picked_up"},
    {date : 9,key:"picked_up"},
    {date : 13,key:"picked_up"},
    {date : 16,key:"picked_up"},
    {date : 20,key:"picked_up"},
    {date : 23,key:"next_pick_up"},
    {date : 27,key:"upcoming_pick_up"},
    {date : 30,key:"upcoming_pick_up"},
  ]
  const renderCalendar = () => {
    const calendar = [];
    let dayCounter = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
          week.push(<td key={j}></td>);
        } else {
            const foundElement = dayData.find(element => element.date === dayCounter);
            if(foundElement){
                var colorClass
                if(foundElement?.key === "picked_up"){
                    colorClass = 'lightRed-dot'
                }else if(foundElement?.key === "next_pick_up" ){
                    colorClass = 'green-dot'
                }else{
                    colorClass = 'blue-dot'  
                }
                week.push(<td key={j}><span className={`calendar-badge ${colorClass}`}>{dayCounter}</span></td>);
            }else{
                week.push(<td key={j}><span className="calendar-badge">{dayCounter}</span></td>);
            }
          
          dayCounter++;
        }
      }
      calendar.push(<tr key={i}>{week}</tr>);
    }
    return calendar;
  };
  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };
  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };
  return (
    <div className="calendar-wrapper px-5">
      <div className="row justify-content-between">
        <div className="col-md-auto">
          <p className="letter-spacing-1 fs-22 mb-0 text-capitalize fw-bold">
            Next pickup date
          </p>
          <p className="fs-14 primary-color fw-bold">17/09/2023</p>
        </div>
        <div className="col-md-auto mx-5">
          <button onClick={prevMonth} className="calendar-btn me-2">
            <LiaAngleLeftSolid />
          </button>
          <button onClick={nextMonth} className="calendar-btn">
            <LiaAngleRightSolid />
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="text-center fs-22 fw-500">
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <table className="calendar">
            <thead>
              <tr>
                {daysOfWeek.map((day, index) => (
                  <th key={index}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>{renderCalendar()}</tbody>
          </table>
          <div className="row justify-content-between">
                <div className="col-auto">
                    <p className="fs-18 d-flex align-items-center"><span className="status-dots lavendar-dot"></span>Before Pickup Reminder</p>
                </div>
                <div className="col-auto"><p className="fs-18 d-flex align-items-center"><span className="status-dots lightRed-dot"></span>Picked Up</p></div>
                <div className="col-auto"><p className="fs-18 d-flex align-items-center"><span className="status-dots green-dot"></span>Next Pick Up</p></div>
                <div className="col-auto"><p className="fs-18 d-flex align-items-center"><span className="status-dots blue-dot"></span>Upcoming Pick Up</p></div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
export default CustomCalendar;
