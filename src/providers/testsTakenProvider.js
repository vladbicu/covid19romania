import { connect } from "react-redux";
import LineChartWrapper from "../components/LineChart";
import { getTestsTakenAction } from "./../actions/action-creators";

const stateToProps = state => ({
  data: state.covid.data.testsTaken.values,
  isLoading: state.covid.ui.isLoadingTotalTestsTaken,
  title: state.covid.data.testsTaken.description.ro
});

const dispatchToProps = dispatch => ({
  getData: () => {
    dispatch(getTestsTakenAction());
  }
});

export default connect(stateToProps, dispatchToProps)(LineChartWrapper);
