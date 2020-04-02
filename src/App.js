import React from 'react';
import { Heading } from "evergreen-ui";

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
// Providers that render info cards
import TotalCasesNumber from "./providers/number/totalCasesNumberProvider";
import TotalDeathsNumber from "./providers/number/totalDeathsNumberProvider";
import TotalRecoveredNumber from "./providers/number/totalRecoveredNumberProvider";
import ActiveCasesNumber from "./providers/number/activeCasesNumberProvider";

import './App.css';

function App() {
  return (
    <main className="App">
      <header>
        <Heading size={900}>
          Date privind evolutia cazurilor de COVID - 19 din România, preluate
          din surse oficiale si actualizate zilnic.
        </Heading>
      </header>
      <section className="left-side">
        <TotalCasesNumber />
        <TotalRecoveredNumber />
        <TotalDeathsNumber />
        <ActiveCasesNumber />
        <DeathsPercent title="Procentul deceselor de COVID-19 raportat la numarul de cazuri confirmate" />
        <RecoveredPercent title="Procentul persoanelor vindecate de COVID-19 raportat la numarul de cazuri confirmate" />
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
        <RecoveredStats />
        <ActiveCasesStats />
        <ICUCasesStats />
      </section>
    </main>
  );
}

export default App;
