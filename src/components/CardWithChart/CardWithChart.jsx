import React from 'react';
import { Heading, Card, Spinner, Paragraph, Icon } from "evergreen-ui";
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

const CardWithChart = ({
  data,
  chartColor = "#4DD0E1",
  icon = 'circle',
  iconColor = 'info',
  isLoading,
  number = 0,
  text
}) => {
  return (
    <div className="card-wrapper">
      <Card
        elevation={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding={5}
        border="default"
      >
        {isLoading || data.length === 0 ? (
          <Spinner size={32} />
        ) : (
            <>
              <div className="card-wrapper-info">
                <Icon icon={icon} color={iconColor} size={20} />
                <Paragraph size={500}>
                  {text}
                </Paragraph>
                <div className="card-wrapper-info-number">
                  <Heading size={800} marginBottom={10}>
                    {number.total}
                  </Heading>
                </div>
              </div>
              <div className="card-wrapper-numbers">
                <Heading size={600}>
                  <Icon
                    size={16}
                    icon={`${number.amount > 0 ? 'plus' : 'minus'}`}
                  />
                  {number.amount}
                </Heading>
                <Heading size={600}>|</Heading>
                <Heading size={600}>
                  {number.percentage}%
                    </Heading>
              </div>
              <div className="card-wrapper-chart">
                <ResponsiveContainer height={120}>
                  <AreaChart
                    data={data}
                    height={120}
                  >
                    <Area type='monotone' dataKey='value' stroke={chartColor} fill={chartColor} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </>
          )}
      </Card>
    </div>
  );
};

export default CardWithChart;
