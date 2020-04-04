import { createSelector } from 'reselect';
import _ from 'lodash';

const totalCases = state => state.covid.data.totalCases.values;
const totalDeaths = state => state.covid.data.totalDeaths.values;
const totalRecovered = state => state.covid.data.recoveredStats.values;

const calculatePercentage = (a, b) => (a / b) * 100;

export const getDeathPercentage = createSelector(totalCases, totalDeaths, (infected, deaths) => {
  let percentage = 0;
  if (infected.length > 0 && deaths.length > 0) {
    const infectedSum = infected[infected.length -1].value;
    const deathsSum = deaths[deaths.length - 1].value;
    percentage = calculatePercentage(deathsSum, infectedSum);
  }

  return +percentage.toFixed(2);
});

export const getRecoveredPercent = createSelector(
  totalCases,
  totalRecovered,
  (infected, recovered) => {
    let percentage = 0;
    if (infected.length > 0 && recovered.length > 0) {
      const infectedSum = infected[infected.length - 1].value;
      const recoveredSum = recovered[recovered.length - 1].value;

      percentage = (recoveredSum / infectedSum) * 100;
    }

    return +percentage.toFixed(2);
  }
);

export const activeCasesNumber = createSelector(
  totalCases,
  totalDeaths,
  totalRecovered,
  (infected, deaths, recovered) => {
    let activeCases = 0;
    if (infected.length > 0 && deaths.length > 0 && recovered.length > 0) {
      const infectedSum = infected[infected.length - 1].value;
      const recoveredSum = recovered[recovered.length - 1].value;
      const deathsSum = deaths[deaths.length - 1].value;

      activeCases = infectedSum - deathsSum- recoveredSum;
    }

    return +activeCases;
  }
);

export const activeCasesData = createSelector(
  totalCases,
  totalDeaths,
  totalRecovered,
  (infected, deaths, recovered) => {
    let activeCases = [];
    if (infected.length > 0 && deaths.length > 0 && recovered.length > 0) {
      activeCases = _.cloneDeep([...infected]);
      [deaths, recovered].forEach(dataSet => {
        dataSet.forEach(data => {
          const index = activeCases.findIndex(day => day.date === data.date);
          if (index !== -1) {
            activeCases[index] = {
              ...activeCases[index],
              value: activeCases[index].value - data.value
            }
          }
        })
      });
    }

    return activeCases;
  }
);

export const getDayByDayStats = createSelector(
  totalCases,
  totalDeaths,
  totalRecovered,
  activeCasesData,
  (total, deaths, recovered, active) => {
    if (total.length > 0 && deaths.length > 0 && recovered.length > 0 && active.length > 0) {
      const casesYesterday = total[total.length - 2].value || 0;
      const casesToday = total[total.length - 1].value || 0;
      const deathsYesterday = deaths[deaths.length - 2].value || 0;
      const deathsToday = deaths[deaths.length - 1].value || 0;
      const recoveredYesterday = recovered[recovered.length - 2].value || 0;
      const recoveredToday = recovered[recovered.length - 1].value || 0;
      const activeYesterday = active[active.length - 2].value || 0;
      const activeToday = active[active.length - 1].value || 0;

      return {
        cases: {
          total: casesToday,
          amount: casesToday - casesYesterday,
          percentage: calculatePercentage(casesToday - casesYesterday, casesToday).toFixed(2)
        },
        deaths: {
          total: deathsToday,
          amount: deathsToday - deathsYesterday,
          percentage: calculatePercentage(deathsToday - deathsYesterday, deathsToday).toFixed(2)
        },
        recovered: {
          total: recoveredToday,
          amount: recoveredToday - recoveredYesterday,
          percentage: calculatePercentage(recoveredToday - recoveredYesterday, recoveredToday).toFixed(2)
        },
        active: {
          total: activeToday,
          amount: activeToday - activeYesterday,
          percentage: calculatePercentage(activeToday - activeYesterday, activeToday).toFixed(2)
        }
      };
    } else {
      return {
        cases: {
          total: 0,
          amount: 0,
          lastDayEvolutionPercentage: 0
        },
        deaths: {
          total: 0,
          amount: 0,
          percentage: 0
        },
        recovered: {
          total: 0,
          amount: 0,
          percentage: 0
        },
        active: {
          total: 0,
          amount: 0,
          percentage: 0
        }
      };
    }
  }
);
