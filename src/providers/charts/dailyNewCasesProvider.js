import { connect } from "react-redux";
import LineChart from "../../components/LineChart";

const stateToProps = state => ({
  data: state.covid.data.dailyCases.values,
  isLoading: state.covid.ui.isLoadingDailyNewCases,
  title: state.covid.data.dailyCases.description.ro
});

export default connect(stateToProps)(LineChart);
