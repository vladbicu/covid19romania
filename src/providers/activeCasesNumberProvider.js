import React from "react";
import { connect } from "react-redux";
import { Heading, Card, Spinner } from "evergreen-ui";

import { activeCasesNumber } from './../selectors';

const ActiveCasesNumber = ({ data, isLoading }) => {
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
        border="default"
      >
        {isLoading || data.length === 0 ? (
          <Spinner size={32} />
        ) : (
            <>
              <Heading size={900} marginBottom={10}>
                {data}
              </Heading>
              <Heading size={600}>
                Cazuri active de COVID-19 in Romania
              </Heading>
            </>
          )}
      </Card>
    </div>
  );
};

const stateToProps = state => ({
  data: activeCasesNumber(state)
});

export default connect(stateToProps)(ActiveCasesNumber);
