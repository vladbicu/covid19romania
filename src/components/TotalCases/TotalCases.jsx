import React, { useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { Loader } from 'semantic-ui-react';

const TotalCases = ({
  getTotalCases,
  isLoading,
  totalCases
}) => {
  useEffect(() => {
    getTotalCases();
  }, []);

  const renderChart = () => (
    <>
      <AreaChart
        width={500}
        height={400}
        data={totalCases}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey="value" />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </>
  );

  return (
    <div className="total-cases">
      {isLoading ? <Loader /> : renderChart()}
    </div>
  );
};

export default TotalCases;
