import ViewNotionList from './ViewNotionList';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
  const notionFetchStatusState =
    state &&
    state.workflow &&
    state.workflow[`notions_${props.flowType}_${props.recordId}`];
  return {
    fetchStatus: notionFetchStatusState && notionFetchStatusState.fetchStatus,
    workflowResponse: notionFetchStatusState && notionFetchStatusState.data,
  };
};

export default connect(mapStateToProps)(ViewNotionList);
