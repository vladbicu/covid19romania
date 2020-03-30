import { connect } from "react-redux";
import GaugeChart from "../components/GaugeChart";
import { getDeathPercentage } from "../selectors";

const stateToProps = (state, ownProps) => ({
  percentage: getDeathPercentage(state),
  ...ownProps
});

export default connect(stateToProps)(GaugeChart);
