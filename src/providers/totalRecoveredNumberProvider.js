import React from "react";
import { connect } from "react-redux";
import { Heading, Card, Spinner } from "evergreen-ui";

const TotalDeathsNumber = ({ data, isLoading }) => {
  return (
    <div className="card-wrapper">
      <Card
        background="greenTint"
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
            <Heading size={900} marginBottom={10}>
              {data[data.length - 1].value}
            </Heading>
            <Heading size={600}>
              Persoane vindecate de COVID-19 in Romania
            </Heading>
          </>
        )}
      </Card>
    </div>
  );
};

const stateToProps = state => ({
  data: state.covid.data.recoveredStats.values,
  isLoading: state.covid.ui.isLoadingRecoveredStats
});

export default connect(stateToProps)(TotalDeathsNumber);
