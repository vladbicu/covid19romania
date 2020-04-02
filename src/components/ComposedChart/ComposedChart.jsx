import React, { useEffect } from "react";
import {
  Bar,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Heading, Card, Spinner } from "evergreen-ui";

const ComposedChartWrapper = ({
  color = "#ff7300",
  data,
  getData,
  isLoading,
  title
}) => {
  const margin = 20;
  useEffect(() => {
    getData();
  }, []);

  const renderChart = () => (
    <ResponsiveContainer height={400}>
      <ComposedChart
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
        <Bar dataKey="value" barSize={20} fill="rgba(136, 132, 216. 0.2)" />
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          activeDot={{ r: 10 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );

  return (
    <div className="chart-wrapper">
      <Card
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

export default ComposedChartWrapper;
