import React, { useState } from "react";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Sector,
  Cell
} from "recharts";

const data = [
  { name: "State Government Agency", value: 400 },
  { name: "Vendor", value: 300 },
  { name: "Enforcement Team", value: 300 },
  { name: "Nylon Production Company", value: 200 },
  { name: "Enviornmental Consultants", value: 200 },
  { name: "Waste Management Agency", value: 200 },
];
const COLORS = [
  "#DDB5FD",
  "#FFE9E6",
  "#FFD5FB",
  "#FAF1D6",
  "#97E7BF",
  "#E3E9FF",
];

function RevenueShareChart() {
  const [activeIndex, setActiveIndex] = useState(1);
  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };
  return (
    <div className="outer-card h-100">
      <div className="card-header">
        <p>Revenue Share</p>
      </div>
      <div className="card-body">
        <ResponsiveContainer height={250} width="100%">
          <PieChart width={300} height={"100%"}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={60}
              fill="#97E7BF"
              dataKey="value"
              onMouseEnter={onPieEnter}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);

  const mx = cx + (outerRadius + 20) * cos;
  const my = cy + (outerRadius + 20) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 1;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={"#333"}
        fontWeight={"bold"}
      >
        100%
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />

      <circle cx={ex} cy={ey} r={4} fill={fill} stroke="none" />

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#333"
        fontWeight={500}
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
      <text x="0%" y="10%" fontSize={16} fill="#333" fontWeight={"bold"}>
        {payload.name}
      </text>
    </g>
  );
};

export default RevenueShareChart;
