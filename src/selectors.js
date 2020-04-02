import { createSelector } from 'reselect';
import _ from 'lodash';

const totalCases = state => state.covid.data.totalCases.values;
const totalDeaths = state => state.covid.data.totalDeaths.values;
const totalRecovered = state => state.covid.data.recoveredStats.values;

export const getDeathPercentage = createSelector(totalCases, totalDeaths, (infected, deaths) => {
  let percentage = 0;
  if (infected.length > 0 && deaths.length > 0) {
    const infectedSum = infected[infected.length -1].value;
    const deathsSum = deaths[deaths.length - 1].value;

    percentage = (deathsSum / infectedSum) * 100;
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
    if (infected.length > 0 && totalDeaths.length > 0 && recovered.length > 0) {
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
    if (infected.length > 0 && totalDeaths.length > 0 && recovered.length > 0) {
      activeCases = _.cloneDeep([...infected]);
      [deaths, recovered].forEach(dataSet => {
        dataSet.forEach(data => {
          const index = activeCases.findIndex(day => day.date === data.date);
          activeCases[index] = {
            ...activeCases[index],
            value: activeCases[index].value - data.value
          }
        })
      });
    }

    return activeCases;
  }
);
