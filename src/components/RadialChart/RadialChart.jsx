import React from 'react';
import Chart from "react-apexcharts";
import { Heading, Card } from "evergreen-ui";

const RadialChart = ({
  data,
  title = 'gauge-chart'
}) => {
  const options = {
    chart: {
      height: 120,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "55%"
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: false
          },
          value: {
            color: "#111",
            fontSize: "22px",
            show: true
          }
        }
      }
    },
    stroke: {
      lineCap: "round"
    },
    fill: {
      colors: ["#6665F8", "#008000", "#f8bbb9"]
    }
  };
  return (
    <div className="card-wrapper">
      <Card
        elevation={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding={5}
      >
        <Chart options={options} series={[data]} type="radialBar" height={150} />
        <Heading size={600}>{title}</Heading>
        </Card>
    </div>
  );
};

export default RadialChart;
