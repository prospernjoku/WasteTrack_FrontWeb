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
  { month: "Feb", Generated: 5000, Collected: 4000 },
  { month: "March", Generated: 6000, Collected: 6000 },
  { month: "April", Generated: 8000, Collected: 7500 },
  { month: "May", Generated: 8800, Collected: 8000 },
  { month: "June", Generated: 9000, Collected: 8800 },
  { month: "July", Generated: 9500, Collected: 9000 },
  { month: "Aug", Generated: 10000, Collected: 9800 },
  { month: "Sept", Generated: 11000, Collected: 10500 },
  { month: "Oct", Generated: 10000, Collected: 9000 },
  { month: "Nov", Generated: 11000, Collected: 10500 },
  { month: "Dec", Generated: 12000, Collected: 11500 },
];
function NylonBagGenerationChart() {
  return (
    <div className="outer-card my-3">
      <div className="card-header row justify-content-between">
        <div className="col-auto">
          <p>Nylon Bag Generation vs Nylon Bag Collection</p>
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
                type="category"
                dataKey="Generated"
                stroke="#4C7448"
                dot={{ fill: "#4C7448" }}
                strokeWidth={3}
              />
              <Line
                type="category"
                dataKey="Collected"
                stroke="#A3F09C"
                dot={{ fill: "#A3F09C" }}
                strokeWidth={3}
              />
              <Legend />
              <Tooltip />
              <XAxis
                dataKey="month"
                axisLine={{ stroke: "transparent", strokeWidth: 0 }}
                fontSize={14}
              />
              <YAxis
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

export default NylonBagGenerationChart;
