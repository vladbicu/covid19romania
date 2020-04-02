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
  FINISH_TESTS_TAKEN: "finishTestsTaken",

  GET_QUARANTINED_STATS: "getQuarantinedStats",
  RECEIVE_QUARANTINED_STATS: "receiveQuarantinedStats",
  FINISH_QUARANTINED_STATS: "finishQuarantinedStats",

  GET_ISOLATED_STATS: "getIsolatedPeopleStats",
  RECEIVE_ISOLATED_STATS: "receiveIsolatedPeopleStats",
  FINISH_ISOLATED_STATS: "finishIsolatedPeopleStats",

  GET_RECOVERED_STATS: "getRecoveredStats",
  RECEIVE_RECOVERED_STATS: "receiveRecoveredStats",
  FINISH_RECOVERED_STATS: "finishRecoveredStats",

  GET_ICU_STATS: "getICUStats",
  RECEIVE_ICU_STATS: "receiveICUStats",
  FINISH_ICU_STATS: "finishICUStats",
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

// Number of quarantined people
export const getQuarantinedStats = () => ({
  type: COVID_ACTIONS.GET_QUARANTINED_STATS
});

export const receiveQuarantinedStats = payload => ({
  type: COVID_ACTIONS.RECEIVE_QUARANTINED_STATS,
  payload
});

export const finishQuarantinedStats = () => ({
  type: COVID_ACTIONS.FINISH_QUARANTINED_STATS
});

// Number of isolated people
export const getIsolatedPeopleStats = () => ({
  type: COVID_ACTIONS.GET_ISOLATED_STATS
});

export const receiveIsolatedPeopleStats = payload => ({
  type: COVID_ACTIONS.RECEIVE_ISOLATED_STATS,
  payload
});

export const finishIsolatedPeopleStats = () => ({
  type: COVID_ACTIONS.FINISH_ISOLATED_STATS
});

// Number of healed people
export const getRecoveredStats = () => ({
  type: COVID_ACTIONS.GET_RECOVERED_STATS
});

export const receiveRecoveredStats = payload => ({
  type: COVID_ACTIONS.RECEIVE_RECOVERED_STATS,
  payload
});

export const finishRecoveredStats = () => ({
  type: COVID_ACTIONS.FINISH_RECOVERED_STATS
});

// Number of ICU people
export const getICUStats = () => ({
  type: COVID_ACTIONS.GET_ICU_STATS
});

export const receiveICUStats = payload => ({
  type: COVID_ACTIONS.RECEIVE_ICU_STATS,
  payload
});

export const finishICUStats = () => ({
  type: COVID_ACTIONS.FINISH_ICU_STATS
});
