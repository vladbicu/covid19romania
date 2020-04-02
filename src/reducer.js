import { COVID_ACTIONS } from "./actions/actions";

const initialState = {
  data: {
    dailyCases: {
      description: "",
      values: []
    },
    isolatedStats: {
      description: "",
      values: []
    },
    medicalCases: {
      description: "",
      values: []
    },
    quarantinedStats: {
      description: "",
      values: []
    },
    totalCases: {
      description: "",
      values: []
    },
    totalDeaths: {
      description: "",
      values: []
    },
    testsTaken: {
      description: "",
      values: []
    },
    totalICU: {
      description: "",
      values: []
    },
    recoveredStats: {
      description: "",
      values: []
    }
  },
  ui: {
    isLoadingDailyNewCases: false,
    isLoadingMedicalCases: false,
    isLoadingTotalCases: false,
    isLoadingTotalDeaths: false,
    isLoadingTotalTestsTaken: false,
    isLoadingIsolatedStats: false,
    isLoadingQuarantinedStats: false,
    isLoadingRecoveredStats: false,
    isLoadingICUStats: false
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
    // Quarantined stats
    case COVID_ACTIONS.GET_QUARANTINED_STATS:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingQuarantinedStats: true
        }
      };
    case COVID_ACTIONS.RECEIVE_QUARANTINED_STATS:
      return {
        ...state,
        data: {
          ...state.data,
          quarantinedStats: action.payload
        },
        ui: {
          ...state.ui,
          isLoadingQuarantinedStats: false
        }
      };
    case COVID_ACTIONS.FINISH_QUARANTINED_STATS:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingQuarantinedStats: false
        }
      };
    // Isolated stats
    case COVID_ACTIONS.GET_ISOLATED_STATS:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingIsolatedStats: true
        }
      };
    case COVID_ACTIONS.RECEIVE_ISOLATED_STATS:
      return {
        ...state,
        data: {
          ...state.data,
          isolatedStats: action.payload
        },
        ui: {
          ...state.ui,
          isLoadingIsolatedStats: false
        }
      };
    case COVID_ACTIONS.FINISH_ISOLATED_STATS:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingIsolatedStats: false
        }
      };
    // Recovered stats
    case COVID_ACTIONS.GET_RECOVERED_STATS:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingRecoveredStats: true
        }
      };
    case COVID_ACTIONS.RECEIVE_RECOVERED_STATS:
      return {
        ...state,
        data: {
          ...state.data,
          recoveredStats: action.payload
        },
        ui: {
          ...state.ui,
          isLoadingRecoveredStats: false
        }
      };
    case COVID_ACTIONS.FINISH_RECOVERED_STATS:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingRecoveredStats: false
        }
      };
    // ICU people stats
    case COVID_ACTIONS.GET_ICU_STATS:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingICUStats: true
        }
      };
    case COVID_ACTIONS.RECEIVE_ICU_STATS:
      return {
        ...state,
        data: {
          ...state.data,
          totalICU: action.payload
        },
        ui: {
          ...state.ui,
          isLoadingICUStats: false
        }
      };
    case COVID_ACTIONS.FINISH_ICU_STATS:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingICUStats: false
        }
      };
    default:
      return state;
  }
};

export default covid;

