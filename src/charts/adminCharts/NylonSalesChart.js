import React from "react";
import { DatePicker } from "antd";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
const initialData = [
  { month: "Jan", Generated: 6000, Collected: 4000 },
  { month: "Feb", Generated: 8000, Collected: 4000 },
  { month: "March", Generated: 3000, Collected: 3500 },
  { month: "April", Generated: 8000, Collected: 7500 },
  { month: "May", Generated: 3800, Collected: 2000 },
  { month: "June", Generated: 9000, Collected: 8800 },
  { month: "July", Generated: 5500, Collected: 4000 },
  { month: "Aug", Generated: 10000, Collected: 9000 },
  { month: "Sept", Generated: 9500, Collected: 8000 },
  { month: "Oct", Collected: 8000 },
  { month: "Nov", Collected: 10500 },
  { month: "Dec", Collected: 11500 },
];
function NylonSalesChart() {
  // Custom Y-Axis tick formatter function
  const formatYAxis = (tick) => {
    return `₦${tick / 1000}k`;
  };
  return (
    <div className="outer-card my-3">
      <div className="card-header row justify-content-between">
        <div className="col-auto">
          <p>Nylon Sales</p>
        </div>
        <div className="col-auto">
          <div className="d-flex align-items-center month-select">
            <DatePicker format={"YYYY"} picker="year" />
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="chart-container-grid mt-4 pb-3">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart width={600} height={250} data={initialData}>
              <Line
                type="monotone"
                dataKey="Generated"
                stroke="#73AE6E"
                dot={false}
                strokeWidth={5}
              />
              <Line
                type="monotone"
                dataKey="Collected"
                stroke="#97E7BF"
                strokeDasharray="8 5"
                dot={false}
                strokeWidth={1}
              />
              <Legend />
              <Tooltip />
              <XAxis
                dataKey="month"
                axisLine={{ stroke: "transparent", strokeWidth: 0 }}
                fontSize={14}
              />
              <YAxis
                tickFormatter={formatYAxis}
                axisLine={{ stroke: "transparent", strokeWidth: 0 }}
                fontSize={14}
              />
              <CartesianGrid
                stroke="#ccc"
                strokeLinejoin="3 3"
                strokeWidth={0.4}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default NylonSalesChart;
