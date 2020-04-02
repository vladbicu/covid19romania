import {
  // total cases
  getTotalCases,
  receiveTotalCases,
  finishTotalCases,
  // total deaths
  getTotalDeaths,
  receiveTotalDeaths,
  finishTotalDeaths,
  // daily cases
  getDailyCases,
  receiveDailyCases,
  finishDailyCases,
  // tests taken
  getTestsTaken,
  receiveTestsTaken,
  finishTestsTaken,
  // medical personel infected
  getMedicalCases,
  receiveMedicalCases,
  finishMedicalCases,
  // quarantined people stats
  getQuarantinedStats,
  receiveQuarantinedStats,
  finishQuarantinedStats,
  // isolated people stats
  getIsolatedPeopleStats,
  receiveIsolatedPeopleStats,
  finishIsolatedPeopleStats,
  // recovered people stats
  getRecoveredStats,
  receiveRecoveredStats,
  finishRecoveredStats,
  // ICU people stats
  getICUStats,
  receiveICUStats,
  finishICUStats
} from "./actions";

const URL = {
  DAILY_NEW_CASES:
    "https://raw.githubusercontent.com/adrianp/covid19romania/master/new_cases_ro.json",
  MEDICAL_PERSONEL_INFECTED:
    "https://raw.githubusercontent.com/adrianp/covid19romania/master/medical_cases_ro.json",
  ISOLATED_STATS:
    "https://raw.githubusercontent.com/adrianp/covid19romania/master/isolation_ro.json",
  QUARANTINED_STATS:
    "https://raw.githubusercontent.com/adrianp/covid19romania/master/quarantined_ro.json",
  TOTAL_CASES:
    "https://raw.githubusercontent.com/adrianp/covid19romania/master/total_cases_ro.json",
  TOTAL_DEATHS:
    "https://raw.githubusercontent.com/adrianp/covid19romania/master/total_deaths_ro.json",
  TOTAL_TESTS_TAKEN:
    "https://raw.githubusercontent.com/adrianp/covid19romania/master/tests_ro.json",
  TOTAL_RECOVERED:
    "https://raw.githubusercontent.com/adrianp/covid19romania/master/total_recovered_ro.json",
  TOTAL_ICU:
    "https://raw.githubusercontent.com/adrianp/covid19romania/master/icu_ro.json"
};

export const getTotalCasesAction = () => async dispatch => {
  dispatch(getTotalCases());
  try {
    const raw = await fetch(URL.TOTAL_CASES);
    const response = await raw.json();
    dispatch(receiveTotalCases(response));
  } catch (error) {
    console.log(error);
    dispatch(finishTotalCases())
  }
}

export const getTotalDeathsAction = () => async dispatch => {
  dispatch(getTotalDeaths());
  try {
    const raw = await fetch(URL.TOTAL_DEATHS);
    const response = await raw.json();
    dispatch(receiveTotalDeaths(response));
  } catch (error) {
    console.log(error);
    dispatch(finishTotalDeaths());
  }
};

export const getDailyCasesAction = () => async dispatch => {
  dispatch(getDailyCases());
  try {
    const raw = await fetch(URL.DAILY_NEW_CASES);
    const response = await raw.json();
    dispatch(receiveDailyCases(response));
  } catch (error) {
    console.log(error);
    dispatch(finishDailyCases());
  }
};

export const getTestsTakenAction = () => async dispatch => {
  dispatch(getTestsTaken());
  try {
    const raw = await fetch(URL.TOTAL_TESTS_TAKEN);
    const response = await raw.json();
    dispatch(receiveTestsTaken(response));
  } catch (error) {
    console.log(error);
    dispatch(finishTestsTaken());
  }
};

export const getMedicalCasesAction = () => async dispatch => {
  dispatch(getMedicalCases());
  try {
    const raw = await fetch(URL.MEDICAL_PERSONEL_INFECTED);
    const response = await raw.json();
    dispatch(receiveMedicalCases(response));
  } catch (error) {
    console.log(error);
    dispatch(finishMedicalCases());
  }
};

export const getIsolatedStatsAction = () => async dispatch => {
  dispatch(getIsolatedPeopleStats());
  try {
    const raw = await fetch(URL.ISOLATED_STATS);
    const response = await raw.json();
    dispatch(receiveIsolatedPeopleStats(response));
  } catch (error) {
    console.log(error);
    dispatch(finishIsolatedPeopleStats());
  }
};

export const getQuarantinedStatsAction = () => async dispatch => {
  dispatch(getQuarantinedStats());
  try {
    const raw = await fetch(URL.QUARANTINED_STATS);
    const response = await raw.json();
    dispatch(receiveQuarantinedStats(response));
  } catch (error) {
    console.log(error);
    dispatch(finishQuarantinedStats());
  }
};

export const getRecoveredStatsAction = () => async dispatch => {
  dispatch(getRecoveredStats());
  try {
    const raw = await fetch(URL.TOTAL_RECOVERED);
    const response = await raw.json();
    dispatch(receiveRecoveredStats(response));
  } catch (error) {
    console.log(error);
    dispatch(finishRecoveredStats());
  }
};

export const getICUCases = () => async dispatch => {
  dispatch(getICUStats());
  try {
    const raw = await fetch(URL.TOTAL_ICU);
    const response = await raw.json();
    dispatch(receiveICUStats(response));
  } catch (error) {
    console.log(error);
    dispatch(finishICUStats());
  }
};
