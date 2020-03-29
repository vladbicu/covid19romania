import { connect } from "react-redux";
import AreaChartWrapper from "./../components/AreaChart";
import { getDailyCasesAction } from "./../actions/action-creators";

const stateToProps = state => ({
  data: state.covid.data.dailyCases.values,
  isLoading: state.covid.ui.isLoadingDailyNewCases,
  title: state.covid.data.dailyCases.metric
});

const dispatchToProps = dispatch => ({
  getData: () => {
    dispatch(getDailyCasesAction());
  }
});

export default connect(stateToProps, dispatchToProps)(AreaChartWrapper);
