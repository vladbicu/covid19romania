import { COVID_ACTIONS } from "./actions/actions";

const initialState = {
  data: {
    totalCases: [],
  },
  ui: {
    isLoadingTotalCases: false,
  }
};

const covid = (state = initialState, action) => {
  switch (action.type) {
    // Total cases in Romania
    case COVID_ACTIONS.GET_TOTAL_CASES:
      return {
        ...state,
        ui: {
          isLoadingTotalCases: true
        }
      };
    case COVID_ACTIONS.RECEIVE_TOTAL_CASES:
      return {
        ...state,
        data: {
          totalCases: action.payload
        },
        ui: {
          isLoadingTotalCases: false
        }
      };
    case COVID_ACTIONS.FINISH_TOTAL_CASES:
      return {
        ...state,
        ui: {
          isLoadingTotalCases: false
        }
      };
    default:
      return state;
  }
};

export default covid;

