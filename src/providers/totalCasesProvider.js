import { connect } from "react-redux";
import AreaChartWrapper from "./../components/AreaChart";
import { getTotalCasesAction } from "./../actions/action-creators";

const stateToProps = state => ({
  data: state.covid.data.totalCases.values,
  isLoading: state.covid.ui.isLoadingTotalCases,
  title: state.covid.data.totalCases.metric
});

const dispatchToProps = dispatch => ({
  getData: () => {
    dispatch(getTotalCasesAction());
  }
});

export default connect(stateToProps, dispatchToProps)(AreaChartWrapper);
