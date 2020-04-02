import { connect } from "react-redux";
import LineChartWrapper from "../components/LineChart";
import { activeCasesData } from '../selectors'

const stateToProps = state => {
  const activeCases = {
    metric: "Cumulative number of active COVID-19 cases in Romania",
    description: {
      en: "Cumulative number of active COVID-19 cases in Romania",
      ro: "Numar total de cazuri active de COVID-19 confirmate in Romania"
    }
  };
  return {
    data: activeCasesData(state),
    isLoading:
      state.covid.ui.isLoadingTotalCases &&
      state.covid.ui.isLoadingTotalDeaths &&
      state.covid.ui.isLoadingTotalRecovered,
    title: activeCases.description.ro
  };
};

const dispatchToProps = dispatch => ({
  getData: () => {}
});

export default connect(stateToProps, dispatchToProps)(LineChartWrapper);
