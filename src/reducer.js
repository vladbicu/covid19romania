import { COVID_ACTIONS } from "./actions/actions";

const initialState = {
  data: {
    dailyCases: {
      metric: "",
      values: []
    },
    medicalCases: {
      metric: "",
      values: []
    },
    totalCases: {
      metric: "",
      values: []
    },
    totalDeaths: {
      metric: "",
      values: []
    },
    testsTaken: {
      metric: "",
      values: []
    }
  },
  ui: {
    isLoadingDailyNewCases: false,
    isLoadingMedicalCases: false,
    isLoadingTotalCases: false,
    isLoadingTotalDeaths: false,
    isLoadingTotalTestsTaken: false
  }
};

const covid = (state = initialState, action) => {
  switch (action.type) {
    // Total cases in Romania
    case COVID_ACTIONS.GET_TOTAL_CASES:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingTotalCases: true
        }
      };
    case COVID_ACTIONS.RECEIVE_TOTAL_CASES:
      return {
        ...state,
        data: {
          ...state.data,
          totalCases: action.payload
        },
        ui: {
          ...state.ui,
          isLoadingTotalCases: false
        }
      };
    case COVID_ACTIONS.FINISH_TOTAL_CASES:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingTotalCases: false
        }
      };
    // Total deaths in Romania
    case COVID_ACTIONS.GET_TOTAL_DEATHS:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingTotalDeaths: true
        }
      };
    case COVID_ACTIONS.RECEIVE_TOTAL_DEATHS:
      return {
        ...state,
        data: {
          ...state.data,
          totalDeaths: action.payload
        },
        ui: {
          ...state.ui,
          isLoadingTotalDeaths: false
        }
      };
    case COVID_ACTIONS.FINISH_TOTAL_DEATHS:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingTotalDeaths: false
        }
      };
    // Daily new cases
    case COVID_ACTIONS.GET_DAILY_CASES:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingDailyNewCases: true
        }
      };
    case COVID_ACTIONS.RECEIVE_DAILY_CASES:
      return {
        ...state,
        data: {
          ...state.data,
          dailyCases: action.payload
        },
        ui: {
          ...state.ui,
          isLoadingDailyNewCases: false
        }
      };
    case COVID_ACTIONS.FINISH_DAILY_CASES:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingDailyNewCases: false
        }
      };
    // Medical personel cases
    case COVID_ACTIONS.GET_MEDICAL_CASES:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingMedicalCases: true
        }
      };
    case COVID_ACTIONS.RECEIVE_MEDICAL_CASES:
      return {
        ...state,
        data: {
          ...state.data,
          medicalCases: action.payload
        },
        ui: {
          ...state.ui,
          isLoadingMedicalCases: false
        }
      };
    case COVID_ACTIONS.FINISH_MEDICAL_CASES:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingMedicalCases: false
        }
      };
    // Total test taken
    case COVID_ACTIONS.GET_TESTS_TAKEN:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingTotalTestsTaken: true
        }
      };
    case COVID_ACTIONS.RECEIVE_TESTS_TAKEN:
      return {
        ...state,
        data: {
          ...state.data,
          testsTaken: action.payload
        },
        ui: {
          ...state.ui,
          isLoadingTotalTestsTaken: false
        }
      };
    case COVID_ACTIONS.FINISH_TESTS_TAKEN:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingTotalTestsTaken: false
        }
      };
    default:
      return state;
  }
};

export default covid;

