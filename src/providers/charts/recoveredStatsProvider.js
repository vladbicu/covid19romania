import { connect } from "react-redux";
import LineChartWrapper from "../../components/LineChart";

const stateToProps = state => ({
  data: state.covid.data.recoveredStats.values,
  isLoading: state.covid.ui.isLoadingTotalCases,
  title: state.covid.data.recoveredStats.description.ro
});

export default connect(stateToProps)(LineChartWrapper);
