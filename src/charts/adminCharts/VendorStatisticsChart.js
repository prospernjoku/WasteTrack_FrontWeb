import React from "react";
import { DatePicker } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";

function VendorStatisticsChart() {
  const data = [
    {
      name: "Jan",
      vendors: 100,
    },
    {
      name: "Feb",
      vendors: 400,
    },
    {
      name: "Mar",
      vendors: 200,
    },
    {
      name: "Apr",
      vendors: 500,
    },
    {
      name: "May",
      vendors: 550,
    },
    {
      name: "Jun",
      vendors: 400,
    },
    {
      name: "Jul",
      vendors: 400,
    },
    {
      name: "Aug",
      vendors: 500,
    },
    {
      name: "Sept",
      vendors: 700,
    },
  ];
  const CustomBar = (props) => {
    const { x, y, width, height } = props;
    const radius = 10; // Adjust the radius to control the roundness of the tops

    return (
      <path
        d={`M${x},${y + height} 
              L${x},${y + radius} 
              Q${x},${y} ${x + radius},${y} 
              L${x + width - radius},${y} 
              Q${x + width},${y} ${x + width},${y + radius} 
              L${x + width},${y + height} 
              Z`}
        fill={props.fill}
      />
    );
  };

  return (
    <div className="outer-card">
      <div className="card-header row justify-content-between">
        <div className="col-auto">
          <p className="mb-0">Vendor Statistics</p>
          <p className="fs-14 gray-light fw-normal">Monthly Vendors</p>
        </div>
        <div className="col-auto">
        <div className="d-flex align-items-center month-select">
          <DatePicker format={"YYYY"} picker="year" />
        </div>
        </div>
       
      </div>
      <div className="card-body">
        <div className="chart-container-grid mt-4 pb-3">
          <ResponsiveContainer height={200} width="100%">
            <BarChart width={500} height={200} data={data} barSize={35}>
              <CartesianGrid strokeDasharray={"3 , 3"} strokeWidth={0.4} />
              <XAxis
                dataKey="name"
                axisLine={{ stroke: "transparent", strokeWidth: 0 }}
                fontSize={14}
              />
              <Bar dataKey="vendors" fill="#E4F9E2" shape={<CustomBar />}>
                <LabelList
                  dataKey="vendors"
                  position="insideTop"
                  fill="#73AE6E"
                  fontSize={14}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default VendorStatisticsChart;
