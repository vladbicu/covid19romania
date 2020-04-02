import { connect } from "react-redux";
import LineChartWrapper from "../../components/LineChart";

const stateToProps = state => ({
  data: state.covid.data.totalCases.values,
  isLoading: state.covid.ui.isLoadingTotalCases,
  title: state.covid.data.totalCases.description.ro
});

export default connect(stateToProps)(LineChartWrapper);
