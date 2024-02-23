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
    month: "Jan",
    "State Government Agency": 30000,
    "Waste Management Agency": 25000,
    "Environmental Consultant": 22000,
    "Nylon Production Company": 20000,
    Vendor: 18000,
    "Enforcement Team": 10000,
  },
  {
    month: "Feb",
    "State Government Agency": 35000,
    "Waste Management Agency": 30000,
    "Environmental Consultant": 25000,
    "Nylon Production Company": 20000,
    Vendor: 18000,
    "Enforcement Team": 16000,
  },
  {
    month: "Mar",
    "State Government Agency": 40000,
    "Waste Management Agency": 35000,
    "Environmental Consultant": 46000,
    "Nylon Production Company": 30000,
    Vendor: 20000,
    "Enforcement Team": 12000,
  },
  {
    month: "Apr",
    "State Government Agency": 50000,
    "Waste Management Agency": 45000,
    "Environmental Consultant": 40000,
    "Nylon Production Company": 30000,
    Vendor: 20000,
    "Enforcement Team": 18000,
  },
  {
    month: "May",
    "State Government Agency": 40000,
    "Waste Management Agency": 35000,
    "Environmental Consultant": 30000,
    "Nylon Production Company": 25000,
    Vendor: 20000,
    "Enforcement Team": 22000,
  },
  {
    month: "Jun",
    "State Government Agency": 45000,
    "Waste Management Agency": 40000,
    "Environmental Consultant": 35000,
    "Nylon Production Company": 30000,
    Vendor: 25000,
    "Enforcement Team": 20000,
  },
];

function RevenueEarned() {
  return (
    <div className="outer-card my-3">
      <div className="card-header row justify-content-between">
        <div className="col-auto">
          <p>Revenue Earned</p>
        </div>

        <div className="col-auto">
          <div className="d-flex align-items-center month-select">
            <DatePicker format={"YYYY"} picker="year" />
          </div>
        </div>
      </div>
      <div className="card-body">
        <p className="mb-0 gray-color">August & September</p>
        <div className="chart-container mt-4 pb-3">
          <ResponsiveContainer height={250} width="100%">
            <BarChart width={500} height={250} data={data} barSize={10}>
              <CartesianGrid strokeWidth={0.4} />
              <XAxis
                dataKey="month"
                axisLine={{ stroke: "transparent", strokeWidth: 0 }}
                fontSize={14}
              />
              <YAxis
                axisLine={{ stroke: "transparent", strokeWidth: 0 }}
                fontSize={14}
              />
              <Legend />
              <Bar dataKey="State Government Agency" fill="#2B3F29" />
              <Bar dataKey="Waste Management Agency" fill="#609D5A" />
              <Bar dataKey="Environmental Consultant" fill="#A3F09C" />
              <Bar dataKey="Nylon Production Company" fill="#4C7448" />
              <Bar dataKey="Vendor" fill="#81DC79" />
              <Bar dataKey="Enforcement Team" fill="#CFFFCB" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default RevenueEarned;
