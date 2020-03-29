import React, { useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { Loader } from 'semantic-ui-react';

const AreaChartWrapper = ({
  data,
  getData,
  isLoading,
  title
}) => {
  const margin = 20
  useEffect(() => {
    getData();
  }, []);

  const renderChart = () => (
    <AreaChart
      key={title}
      width={window.innerWidth - margin * 2}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: margin,
        left: margin,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis dataKey="value" />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );

  return (
    <div className="area-chart-wrapper">
      <h3>{title}</h3>
      {isLoading ? <Loader /> : renderChart()}
    </div>
  );
};

export default AreaChartWrapper;
