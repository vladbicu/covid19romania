import { connect } from "react-redux";
import LineChartWrapper from "../components/LineChart";
import { getRecoveredStatsAction } from "./../actions/action-creators";

const stateToProps = state => ({
  data: state.covid.data.recoveredStats.values,
  isLoading: state.covid.ui.isLoadingTotalCases,
  title: state.covid.data.recoveredStats.description.ro
});

const dispatchToProps = dispatch => ({
  getData: () => {
    dispatch(getRecoveredStatsAction());
  }
});

export default connect(stateToProps, dispatchToProps)(LineChartWrapper);
