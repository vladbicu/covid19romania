import { connect } from 'react-redux';
import TotalCases from './TotalCases';
import { getTotalCasesAction } from './../../actions/action-creators';

const stateToProps = state => ({
  totalCases: state.covid.data.totalCases,
  isLoading: state.covid.ui.isLoadingTotalCases
});

const dispatchToProps = dispatch => ({
  getTotalCases: () => { dispatch(getTotalCasesAction()); }
});

export default connect(stateToProps, dispatchToProps)(TotalCases);
