import { connect } from "react-redux";
import LineChartWrapper from "../components/LineChart";
import { getQuarantinedStatsAction } from "./../actions/action-creators";

const stateToProps = state => ({
  data: state.covid.data.quarantinedStats.values,
  isLoading: state.covid.ui.isLoadingQuarantinedStats,
  title: state.covid.data.quarantinedStats.metric
});

const dispatchToProps = dispatch => ({
  getData: () => {
    dispatch(getQuarantinedStatsAction());
  }
});

export default connect(stateToProps, dispatchToProps)(LineChartWrapper);
