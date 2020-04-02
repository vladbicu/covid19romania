import { connect } from "react-redux";
import RadialChart from "../../components/RadialChart";
import { getDeathPercentage } from "../../selectors";

const stateToProps = (state, ownProps) => ({
  data: getDeathPercentage(state),
  ...ownProps
});

export default connect(stateToProps)(RadialChart);
