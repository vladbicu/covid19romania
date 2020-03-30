import { connect } from "react-redux";
import GaugeChart from "../components/GaugeChart";
import { getRecoveredPercent } from "../selectors";

const stateToProps = (state, ownProps) => ({
  percentage: getRecoveredPercent(state),
  ...ownProps
});

export default connect(stateToProps)(GaugeChart);
