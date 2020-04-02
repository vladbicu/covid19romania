import { connect } from "react-redux";
import RadialChart from "../../components/RadialChart";
import { getRecoveredPercent } from "../../selectors";

const stateToProps = (state, ownProps) => ({
  data: getRecoveredPercent(state),
  ...ownProps
});

export default connect(stateToProps)(RadialChart);
