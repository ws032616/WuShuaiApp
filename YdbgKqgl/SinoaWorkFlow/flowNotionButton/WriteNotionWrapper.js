//@flow
import WriteNotion from './WriteNotion';
import { connect } from 'react-redux';
import { createActionCreators } from 'sinooa-redux-workflow';

const actionCreators = createActionCreators('tempnotion', 'save');

const mapDispatchToProps = dispatch => ({
  saveNotion: (requestParam, userId) => {
    dispatch(
      actionCreators.saveStart({
        requestParam,
        flowType: requestParam.flowTypeId,
        recordId: requestParam.recordId,
        userId,
        notionName: requestParam.notionName,
      }),
    );
  },
});

const mapStateToProps = (state, props) => {
  const tempnotionState =
    state &&
    state.workflow &&
    state.workflow[
      `tempNotion_${props.flowType}_${props.recordId}_${props.userId}_${props.type}`
    ];
  return {
    saveStatus: tempnotionState && tempnotionState.saveStatus,
    requestParam: tempnotionState && tempnotionState.requestParam,
    response: tempnotionState && tempnotionState.data,
    error: tempnotionState && tempnotionState.error,
    ...props,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WriteNotion);
