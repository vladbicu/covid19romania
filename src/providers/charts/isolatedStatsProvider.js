import { connect } from "react-redux";
import LineChartWrapper from "../../components/LineChart";

const stateToProps = state => ({
  data: state.covid.data.isolatedStats.values,
  isLoading: state.covid.ui.isLoadingIsolatedStats,
  title: state.covid.data.isolatedStats.description.ro
});

export default connect(stateToProps)(LineChartWrapper);
