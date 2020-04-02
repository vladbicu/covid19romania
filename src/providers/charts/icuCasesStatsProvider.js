import { connect } from "react-redux";
import LineChart from "../../components/LineChart";

const stateToProps = state => ({
  data: state.covid.data.totalICU.values,
  isLoading: state.covid.ui.isLoadingICUStats,
  title: state.covid.data.totalICU.description.ro
});

export default connect(stateToProps)(LineChart);
