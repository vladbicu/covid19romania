import React, { useEffect } from 'react';
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
  getData,
  isLoading,
  title
}) => {
  const margin = 20
  useEffect(() => {
    getData();
  }, []);

  const renderChart = () => (
    <ResponsiveContainer height={400}>
      <LineChart
        key={title}
        width={window.innerWidth}
        height={500}
        data={data}
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
        interactive={true}
        elevation={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding={5}
      >
        {isLoading ? <Spinner size={32} /> : renderChart()}
        <Heading size={600}>{title}</Heading>
      </Card>
    </div>
  );
};

export default LineChartWrapper;
