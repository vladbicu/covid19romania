import { connect } from "react-redux";
import CardWithChart from '../../components/CardWithChart';
import { getDayByDayStats } from '../../selectors';

const stateToProps = (state, ownProps) => {
  return {
    data: state.covid.data.totalCases.values,
    isLoading: state.covid.ui.isLoadingTotalCases,
    number: getDayByDayStats(state).deaths,
    ...ownProps
  };
};

export default connect(stateToProps)(CardWithChart);