import React from 'react';
import Chart from "react-apexcharts";
import { Heading, Card } from "evergreen-ui";

const RadialChart = ({
  data,
  title = 'gauge-chart',
  type = 'full'
}) => {
  const options = {
    chart: {
      height: 280,
      type: "radialBar"
    },
    series: [data],
    labels: [""],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "45%"
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: false
          },
          value: {
            color: "#111",
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    stroke: {
      lineCap: "round"
    },
    fill: {
      colors: ["#F44336", "#E91E63", "#9C27B0"]
    }
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
        <Chart options={options} series={[data]} type="radialBar" />
        <Heading size={600}>{title}</Heading>
      </Card>
    </div>
  );
};

export default RadialChart;
