import React from 'react';

import DailyNewCases from "./providers/dailyNewCasesProvider";
import MedicalCases from './providers/medicalCasesProvider';
import TotalCases from "./providers/totalCasesProvider";
import TotalDeaths from "./providers/totalDeathsProvider";
import TotalTestsTaken from "./providers/testsTakenProvider";
import IsolatedStats from "./providers/isolatedStatsProvider";
import QuarantinedStats from "./providers/quarantinedStatsProvider";
import DeathsRatio from "./providers/deathsRatioProvider";
import TotalCasesNumber from "./providers/totalCasesNumberProvider";
import TotalDeathsNumber from "./providers/totalDeathsNumberProvider";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left-side">
        <TotalCasesNumber />
        <TotalDeathsNumber />
        <DeathsRatio title="Procentul deceselor de COVID-19 raportat la numarul de cazuri confirmate" />
      </div>
      <div className="right-side">
        <TotalCases />
        <TotalDeaths />
        <DailyNewCases />
        <TotalTestsTaken />
        <MedicalCases />
        <IsolatedStats />
        <QuarantinedStats />
      </div>
    </div>
  );
}

export default App;
