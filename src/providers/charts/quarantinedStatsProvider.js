import { connect } from "react-redux";
import LineChartWrapper from "../../components/LineChart";

const stateToProps = state => ({
  data: state.covid.data.quarantinedStats.values,
  isLoading: state.covid.ui.isLoadingQuarantinedStats,
  title: state.covid.data.quarantinedStats.description.ro
});

export default connect(stateToProps)(LineChartWrapper);
