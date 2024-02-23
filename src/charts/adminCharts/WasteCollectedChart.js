import React from "react";
import { DatePicker } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "1-5",
    August: 100,
    September: 50,
  },
  {
    name: "6-10",
    August: 130,
    September:60,
  },
  {
    name: "11-15",
    August: 100,
    September: 80,
  },
  {
    name: "16-20",
    August: 140,
    September: 90,
  },
  {
    name: "21-25",
    August: 160,
    September: 120,
  },
  {
    name: "26-30",
    August: 80,
    September:70,
  },
  {
    name: "Page G",
    August: 100,
    September: 80,
  },
];

function WasteCollectedChart() {
  return (
    <div className="outer-card my-3">
      <div className="card-header row justify-content-between">
      <div className="col-auto">
      <p>Waste Collection (in kg)</p>
      </div>
        <div className="col-auto d-flex align-items-center month-select">
          <DatePicker format={"MMMM"} picker="month" />
          <span className="fs-14 mx-2 gray-color">And</span>
          <DatePicker format={"MMMM"} picker="month" />
        </div>
      </div>
      <div className="card-body">
        <p className="mb-0 gray-color">August & September</p>
        <div className="chart-container mt-4 pb-3">
          <ResponsiveContainer height={300} width="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              barSize={25}
            >
              <CartesianGrid  strokeWidth={.4}/>
              <XAxis dataKey="name" axisLine={{ stroke: 'transparent', strokeWidth: 0 }} fontSize={14} />
              <YAxis axisLine={{ stroke: 'transparent', strokeWidth: 0 }} fontSize={14}/>
              <Legend />
              <Bar dataKey="August" fill="#C8F1C5"/>
              <Bar dataKey="September" fill="#4C7448"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default WasteCollectedChart;
