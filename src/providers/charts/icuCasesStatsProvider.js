import { connect } from "react-redux";
import LineChart from "../../components/LineChart";
import { getICUCases } from "../../actions/action-creators";

const stateToProps = state => ({
  data: state.covid.data.totalICU.values,
  isLoading: state.covid.ui.isLoadingICUStats,
  title: state.covid.data.totalICU.description.ro
});

const dispatchToProps = dispatch => ({
  getData: () => {
    dispatch(getICUCases());
  }
});

export default connect(stateToProps, dispatchToProps)(LineChart);
