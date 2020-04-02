import React from 'react';

import DailyNewCases from "./providers/dailyNewCasesProvider";
import MedicalCases from './providers/medicalCasesProvider';
import TotalCases from "./providers/totalCasesProvider";
import TotalDeaths from "./providers/totalDeathsProvider";
import TotalTestsTaken from "./providers/testsTakenProvider";
import IsolatedStats from "./providers/isolatedStatsProvider";
import QuarantinedStats from "./providers/quarantinedStatsProvider";
import DeathsPercent from "./providers/deathsRatioProvider";
import RecoveredPercent from "./providers/recoveredPercentProvider";
import TotalCasesNumber from "./providers/totalCasesNumberProvider";
import TotalDeathsNumber from "./providers/totalDeathsNumberProvider";
import TotalRecoveredNumber from "./providers/totalRecoveredNumberProvider";
import RecoveredStats from "./providers/recoveredStatsProvider";
import ActiveCasesNumber from "./providers/activeCasesNumberProvider";
import ActiveCasesStats from "./providers/dailyActiveCasesProvider";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left-side">
        <TotalCasesNumber />
        <ActiveCasesNumber />
        <TotalRecoveredNumber />
        <TotalDeathsNumber />
        <RecoveredPercent title="Procentul persoanelor vindecate de COVID-19 raportat la numarul de cazuri confirmate" />
        <DeathsPercent title="Procentul deceselor de COVID-19 raportat la numarul de cazuri confirmate" />
      </div>
      <div className="right-side">
        <TotalCases />
        <MedicalCases />
        <DailyNewCases />
        <ActiveCasesStats />
        <RecoveredStats />
        <TotalDeaths />
        <TotalTestsTaken />
        <QuarantinedStats />
        <IsolatedStats />
      </div>
    </div>
  );
}

export default App;
