import React from 'react';
import { connect } from "react-redux";
import { Heading, Card, Spinner } from "evergreen-ui";

const TotalCasesNumber = ({
  data,
  isLoading
}) => {
  return (
    <div className="card-wrapper">
      <Card
        background="yellowTint"
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
            <Heading size={900} marginBottom={10}>{data[data.length - 1].value}</Heading>
            <Heading size={600}>Cazuri de COVID-19 confirmate in Romania</Heading>
          </>
        )}
      </Card>
    </div>
  );
};

const stateToProps = (state, ownProps) => ({
  data: state.covid.data.totalCases.values,
  isLoading: state.covid.ui.isLoadingTotalCases,
  ...ownProps
});

export default connect(stateToProps)(TotalCasesNumber);
