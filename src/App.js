import React from 'react';

import DailyNewCases from "./providers/dailyNewCasesProvider";
import MedicalCases from './providers/medicalCasesProvider';
import TotalCases from "./providers/totalCasesProvider";
import TotalDeaths from "./providers/totalDeathsProvider";
import TotalTestsTaken from "./providers/testsTakenProvider";
import IsolatedStats from "./providers/isolatedStatsProvider";
import QuarantinedStats from "./providers/quarantinedStatsProvider";

import './App.css';

function App() {
  return (
    <div className="App">
      <TotalCases />
      <TotalDeaths />
      <DailyNewCases />
      <TotalTestsTaken />
      <MedicalCases />
      <IsolatedStats />
      <QuarantinedStats />
    </div>
  );
}

export default App;
