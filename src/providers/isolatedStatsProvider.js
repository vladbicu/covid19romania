import { connect } from "react-redux";
import LineChartWrapper from "../components/LineChart";
import { getIsolatedStatsAction } from "./../actions/action-creators";

const stateToProps = state => ({
  data: state.covid.data.isolatedStats.values,
  isLoading: state.covid.ui.isLoadingIsolatedStats,
  title: state.covid.data.isolatedStats.metric
});

const dispatchToProps = dispatch => ({
  getData: () => {
    dispatch(getIsolatedStatsAction());
  }
});

export default connect(stateToProps, dispatchToProps)(LineChartWrapper);
