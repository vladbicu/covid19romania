import { connect } from "react-redux";
import CardWithChart from '../../components/CardWithChart';
import { activeCasesData, getDayByDayStats } from '../../selectors';

const stateToProps = (state, ownProps) => ({
  data: activeCasesData(state),
  number: getDayByDayStats(state).active,
  isLoading: state.covid.ui.isLoadingTotalCases &&
    state.covid.ui.isLoadingTotalDeaths &&
    state.covid.ui.isLoadingRecoveredStats,
  ...ownProps
});

export default connect(stateToProps)(CardWithChart);
