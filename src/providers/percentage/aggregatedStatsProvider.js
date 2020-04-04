import { connect } from "react-redux";
import RadialChart from "../../components/RadialChart";
import { getDayByDayStats } from "../../selectors";

const stateToProps = (state, ownProps) => {
  const aggregatedData = getDayByDayStats(state);
  return {
    data: [
      aggregatedData.active.total,
      aggregatedData.recovered.total,
      aggregatedData.deaths.total
    ],
    ...ownProps
  };
};

export default connect(stateToProps)(RadialChart);