import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Heading } from "evergreen-ui";

// actions
import {
  getICUCases,
  getDailyCasesAction,
  getIsolatedStatsAction,
  getMedicalCasesAction,
  getQuarantinedStatsAction,
  getRecoveredStatsAction,
  getTestsTakenAction,
  getTotalCasesAction,
  getTotalDeathsAction
} from "./actions/action-creators";

// Providers that render line charts
import DailyNewCases from "./providers/charts/dailyNewCasesProvider";
import MedicalCases from './providers/charts/medicalCasesProvider';
import TotalCases from "./providers/charts/totalCasesProvider";
import TotalDeaths from "./providers/charts/totalDeathsProvider";
import TotalTestsTaken from "./providers/charts/testsTakenProvider";
import IsolatedStats from "./providers/charts/isolatedStatsProvider";
import QuarantinedStats from "./providers/charts/quarantinedStatsProvider";
import RecoveredStats from "./providers/charts/recoveredStatsProvider";
import ActiveCasesStats from "./providers/charts/dailyActiveCasesProvider";
import ICUCasesStats from "./providers/charts/icuCasesStatsProvider";
// Providers that render radial charts
import DeathsPercent from "./providers/percentage/deathsRatioProvider";
import RecoveredPercent from "./providers/percentage/recoveredPercentProvider";
// import AggregatedTotals from "./providers/percentage/aggregatedStatsProvider";
// Providers that render info cards
import TotalCasesNumber from "./providers/number/totalCasesNumberProvider";
import TotalDeathsNumber from "./providers/number/totalDeathsNumberProvider";
import TotalRecoveredNumber from "./providers/number/totalRecoveredNumberProvider";
import ActiveCasesNumber from "./providers/number/activeCasesNumberProvider";

import './App.css';

const App = ({
  getICUCases,
  getDailyCases,
  getIsolatedStats,
  getQuarantinedStats,
  getRecoveredStats,
  getTestsTaken,
  getTotalCases,
  getTotalDeaths,
  getMedicalCases
}) => {
  useEffect(() => {
    getICUCases();
    getDailyCases();
    getIsolatedStats();
    getQuarantinedStats();
    getRecoveredStats();
    getTestsTaken();
    getTotalCases();
    getTotalDeaths();
    getMedicalCases();
  }, []);

  return (
    <main className="App">
      <header>
        <Heading size={900}>
          Date privind evolutia cazurilor de COVID - 19 din România, preluate
          din surse oficiale si actualizate zilnic.
        </Heading>
      </header>
      <section className="left-side">
        <TotalCasesNumber
          chartColor="#FFD650"
          icon="numerical"
          iconColor="warning"
          text="Numar total"
        />
        <ActiveCasesNumber
          text="Cazuri active"
        />
        <TotalRecoveredNumber
          chartColor="#008000"
          icon="pulse"
          iconColor="success"
          text="Persoane vindecate"
        />
        <TotalDeathsNumber
          chartColor="#f8bbb9"
          icon="heart-broken"
          iconColor="danger"
          text="Numar decese"
        />
        <RecoveredPercent title="Procentul persoanelor vindecate de COVID-19 raportat la numarul de cazuri confirmate" />
        <DeathsPercent title="Procentul deceselor de COVID-19 raportat la numarul de cazuri confirmate" />
      </section>
      <section className="right-side">
        <TotalCases />
        <MedicalCases />
        <DailyNewCases />
        <ActiveCasesStats />
        <RecoveredStats />
        <TotalDeaths />
        <TotalTestsTaken />
        <QuarantinedStats />
        <IsolatedStats />
        <ICUCasesStats />
      </section>
    </main>
  );
};

const dispatchToProps = dispatch => ({
  getICUCases: () => {
    dispatch(getICUCases());
  },
  getDailyCases: () => {
    dispatch(getDailyCasesAction());
  },
  getIsolatedStats: () => {
    dispatch(getIsolatedStatsAction());
  },
  getQuarantinedStats: () => {
    dispatch(getQuarantinedStatsAction());
  },
  getRecoveredStats: () => {
    dispatch(getRecoveredStatsAction());
  },
  getTestsTaken: () => {
    dispatch(getTestsTakenAction());
  },
  getTotalCases: () => {
    dispatch(getTotalCasesAction());
  },
  getTotalDeaths: () => {
    dispatch(getTotalDeathsAction());
  },
  getMedicalCases: () => {
    dispatch(getMedicalCasesAction());
  },
});

export default connect(null, dispatchToProps)(App);
