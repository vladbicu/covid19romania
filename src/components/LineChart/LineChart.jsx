import React, { useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { Loader } from 'semantic-ui-react';

const LineChartWrapper = ({
  color = '#8884d8',
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
    <LineChart
      key={title}
      width={window.innerWidth - margin * 2}
      height={500}
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
      <Line type="monotone" dataKey="value" stroke={color} activeDot={{ r: 10}} />
    </LineChart>
  );

  return (
    <div className="area-chart-wrapper">
      <h3>{title}</h3>
      {isLoading ? <Loader /> : renderChart()}
    </div>
  );
};

export default LineChartWrapper;
