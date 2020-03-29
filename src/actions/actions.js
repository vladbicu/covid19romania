export const COVID_ACTIONS = {
  GET_TOTAL_CASES: "getTotalCases",
  RECEIVE_TOTAL_CASES: "receiveTotalCases",
  FINISH_TOTAL_CASES: "finishTotalCases",

  GET_TOTAL_DEATHS: "getTotalDeaths",
  RECEIVE_TOTAL_DEATHS: "receiveTotalDeaths",
  FINISH_TOTAL_DEATHS: "finishTotalDeaths",

  GET_MEDICAL_CASES: "getMedicalCases",
  RECEIVE_MEDICAL_CASES: "receiveMedicalCases",
  FINISH_MEDICAL_CASES: "finishMedicalCases",

  GET_DAILY_CASES: "getDailyCases",
  RECEIVE_DAILY_CASES: "receiveDailyCases",
  FINISH_DAILY_CASES: "finishDailyCases",

  GET_TESTS_TAKEN: "getTestsTaken",
  RECEIVE_TESTS_TAKEN: "receiveTestsTaken",
  FINISH_TESTS_TAKEN: "finishTestsTaken"
};

// Total infections in Romania
export const getTotalCases = () => ({
  type: COVID_ACTIONS.GET_TOTAL_CASES
});

export const receiveTotalCases = payload => ({
  type: COVID_ACTIONS.RECEIVE_TOTAL_CASES,
  payload
});

export const finishTotalCases = () => ({
  type: COVID_ACTIONS.FINISH_TOTAL_CASES
});

// Total deaths in Romania
export const getTotalDeaths = () => ({
  type: COVID_ACTIONS.GET_TOTAL_DEATHS
});

export const receiveTotalDeaths = payload => ({
  type: COVID_ACTIONS.RECEIVE_TOTAL_DEATHS,
  payload
});

export const finishTotalDeaths = () => ({
  type: COVID_ACTIONS.FINISH_TOTAL_DEATHS
});

// Total medical personel infected
export const getMedicalCases = () => ({
  type: COVID_ACTIONS.GET_MEDICAL_CASES
});

export const receiveMedicalCases = payload => ({
  type: COVID_ACTIONS.RECEIVE_MEDICAL_CASES,
  payload
});

export const finishMedicalCases = () => ({
  type: COVID_ACTIONS.FINISH_MEDICAL_CASES
});

// Daily new cases
export const getDailyCases = () => ({
  type: COVID_ACTIONS.GET_DAILY_CASES
});

export const receiveDailyCases = payload => ({
  type: COVID_ACTIONS.RECEIVE_DAILY_CASES,
  payload
});

export const finishDailyCases = () => ({
  type: COVID_ACTIONS.FINISH_DAILY_CASES
});

// Number of tests taken
export const getTestsTaken = () => ({
  type: COVID_ACTIONS.GET_TESTS_TAKEN
});

export const receiveTestsTaken = payload => ({
  type: COVID_ACTIONS.RECEIVE_TESTS_TAKEN,
  payload
});

export const finishTestsTaken = () => ({
  type: COVID_ACTIONS.FINISH_TESTS_TAKEN
});
