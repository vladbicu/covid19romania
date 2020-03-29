import {
  getTotalCases,
  receiveTotalCases,
  finishTotalCases
} from './actions'

const URL = {
  TOTAL_CASES:
    "https://raw.githubusercontent.com/adrianp/covid19romania/master/total_cases_ro.json"
};

export const getTotalCasesAction = () => async dispatch => {
  dispatch(getTotalCases());
  try {
    const raw = await fetch(URL.TOTAL_CASES);
    const response = await raw.json();
    dispatch(receiveTotalCases(response.values));
  } catch (error) {
    console.log(error);
    dispatch(finishTotalCases())
  }
}