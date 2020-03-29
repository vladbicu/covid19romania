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
  finishMedicalCases
} from "./actions";

const URL = {
  DAILY_NEW_CASES:
    "https://raw.githubusercontent.com/adrianp/covid19romania/master/new_cases_ro.json",
  MEDICAL_PERSONEL_INFECTED:
    "https://raw.githubusercontent.com/adrianp/covid19romania/master/medical_cases_ro.json",
  TOTAL_CASES:
    "https://raw.githubusercontent.com/adrianp/covid19romania/master/total_cases_ro.json",
  TOTAL_DEATHS:
    "https://raw.githubusercontent.com/adrianp/covid19romania/master/total_deaths_ro.json",
  TOTAL_TESTS_TAKEN:
    "https://raw.githubusercontent.com/adrianp/covid19romania/master/tests_ro.json"
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

