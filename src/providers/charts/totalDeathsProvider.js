import { connect } from "react-redux";
import LineChartWrapper from "../../components/LineChart";
import { getTotalDeathsAction } from "../../actions/action-creators";

const stateToProps = state => ({
  data: state.covid.data.totalDeaths.values,
  isLoading: state.covid.ui.isLoadingTotalCases,
  title: state.covid.data.totalDeaths.description.ro
});

const dispatchToProps = dispatch => ({
  getData: () => {
    dispatch(getTotalDeathsAction());
  }
});

export default connect(stateToProps, dispatchToProps)(LineChartWrapper);
