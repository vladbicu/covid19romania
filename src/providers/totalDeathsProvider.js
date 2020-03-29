import { connect } from "react-redux";
import AreaChartWrapper from "./../components/AreaChart";
import { getTotalDeathsAction } from "./../actions/action-creators";

const stateToProps = state => ({
  data: state.covid.data.totalDeaths.values,
  isLoading: state.covid.ui.isLoadingTotalCases,
  title: state.covid.data.totalDeaths.metric
});

const dispatchToProps = dispatch => ({
  getData: () => {
    dispatch(getTotalDeathsAction());
  }
});

export default connect(stateToProps, dispatchToProps)(AreaChartWrapper);