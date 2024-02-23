import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,Tooltip
} from "recharts";

const initialData = [
  { month: "Jan",pending: 20, confirmed: 20, completed: 40,canceled: 10 },
  { month: "Feb",pending: 30, confirmed: 40, completed: 30,canceled: 40 },
  { month: "March",pending: 35, confirmed: 30, completed: 20,canceled: 20 },
  { month: "April",pending: 40, confirmed: 50, completed: 10,canceled: 30 },
  { month: "May", pending: 30,confirmed: 40, completed: 50 ,canceled: 20},
  { month: "June", pending: 20,confirmed: 50, completed: 60 ,canceled: 10},
  { month: "July",pending: 40, confirmed: 60, completed: 70 ,canceled: 20},
  { month: "Aug", pending: 50,confirmed: 65, completed: 55 ,canceled: 30},
  { month: "Sept",pending: 40, confirmed: 50, completed: 60 ,canceled: 30},
  { month: "Oct", pending: 40,confirmed: 70, completed: 60 ,canceled: 40},
  { month: "Nov", pending: 20,confirmed: 60, completed: 50,canceled: 40 },
  { month: "Dec", pending: 10,confirmed: 80, completed: 70 ,canceled: 20},
];

const WithdrawalChart = () => {
  return (
    <div
      className="highlight-bar-charts chart-container-grid"
      style={{ userSelect: "none", width: "100%" }}
    >
      <ResponsiveContainer width="100%" height={250}>
        <LineChart width={600} height={250} data={initialData}>
          <Line type="category" dataKey="pending" stroke="#FFA412"  dot={{fill:"#FFA412"}} strokeWidth={2}/>
          <Line type="category" dataKey="confirmed" stroke="#436CFF"  dot={{fill:"#436CFF"}} strokeWidth={2} />
          <Line type="category" dataKey="completed" stroke="#73AE6E"  dot={{fill:"#73AE6E"}} strokeWidth={2} />
          <Line type="category" dataKey="cancelled" stroke="#FF6A56"  dot={{fill:"#FF6A56"}} strokeWidth={2} />
          <Tooltip />
          <XAxis dataKey="month" axisLine={{ stroke: 'transparent', strokeWidth: 0 }}/>
          <YAxis  axisLine={{ stroke: 'transparent', strokeWidth: 0 }}/>
          <CartesianGrid stroke="#ccc" strokeWidth={.4}  />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WithdrawalChart;
