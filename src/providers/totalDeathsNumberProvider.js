import React from "react";
import { connect } from "react-redux";
import { Heading, Card, Spinner } from "evergreen-ui";

const TotalDeathsNumber = ({ data, isLoading }) => {
  return (
    <div className="card-wrapper">
      <Card
        background="redTint"
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
              Decese cauzate de COVID-19 in Romania
            </Heading>
          </>
        )}
      </Card>
    </div>
  );
};

const stateToProps = state => ({
  data: state.covid.data.totalDeaths.values,
  isLoading: state.covid.ui.isLoadingTotalCases
});

export default connect(stateToProps)(TotalDeathsNumber);
