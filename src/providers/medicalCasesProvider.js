import { connect } from "react-redux";
import AreaChartWrapper from "./../components/AreaChart";
import { getMedicalCasesAction } from "./../actions/action-creators";

const stateToProps = state => ({
  data: state.covid.data.medicalCases.values,
  isLoading: state.covid.ui.isLoadingMedicalCases,
  title: state.covid.data.medicalCases.metric
});

const dispatchToProps = dispatch => ({
  getData: () => {
    dispatch(getMedicalCasesAction());
  }
});

export default connect(stateToProps, dispatchToProps)(AreaChartWrapper);
