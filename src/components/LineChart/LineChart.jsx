import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Heading, Card, Spinner } from 'evergreen-ui';

const LineChartWrapper = ({
  color = '#8884d8',
  data,
  isLoading,
  title
}) => {
  const margin = 20;

  const renderChart = () => (
    <ResponsiveContainer height={400}>
      <LineChart
        key={title}
        width={window.innerWidth}
        height={400}
        data={data}
        strokeWidth={3}
        margin={{
          top: 10,
          right: margin,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey="value" />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke={color} activeDot={{ r: 10}} />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <div className="chart-wrapper">
      <Card
        border
        elevation={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding={5}
      >
        <Heading size={600}>{title}</Heading>
        {isLoading ? <Spinner size={32} /> : renderChart()}
      </Card>
    </div>
  );
};

export default LineChartWrapper;
