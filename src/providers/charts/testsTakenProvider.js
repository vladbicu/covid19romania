import { connect } from "react-redux";
import LineChartWrapper from "../../components/LineChart";

const stateToProps = state => ({
  data: state.covid.data.testsTaken.values,
  isLoading: state.covid.ui.isLoadingTotalTestsTaken,
  title: state.covid.data.testsTaken.description.ro
});

export default connect(stateToProps)(LineChartWrapper);
