import React from 'react';
import Chart from "react-apexcharts";
import { Heading, Card } from "evergreen-ui";

const GaugeChartWrapper = ({
  title = 'gauge-chart',
  percentage
}) => {
  const options = {
    chart: {
      height: 280,
      type: "radialBar"
    },
    series: [percentage],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        track: {
          background: "#333",
          startAngle: -135,
          endAngle: 135
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "butt"
    },
    labels: [title]
  };
  return (
    <div className="card-wrapper">
      <Card
        background="blueTint"
        elevation={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding={5}
      >
        <Chart options={options} series={[percentage]} type="radialBar" />
        <Heading size={600}>{title}</Heading>
      </Card>
    </div>
  );
};

export default GaugeChartWrapper;
