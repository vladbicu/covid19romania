import { connect } from "react-redux";
import LineChartWrapper from "../../components/LineChart";

const stateToProps = state => ({
  data: state.covid.data.medicalCases.values,
  isLoading: state.covid.ui.isLoadingMedicalCases,
  title: state.covid.data.medicalCases.description.ro
});

export default connect(stateToProps)(LineChartWrapper);
