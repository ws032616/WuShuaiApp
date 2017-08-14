import { combineReducers, compose, applyMiddleware } from 'redux';
import Reactotron from 'reactotron-react-native';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { Leaves } from './LeavesRedux';
import rootSaga from '../Sagas';
import { workflowReducer } from 'sinooa-redux-workflow';
import { rootSagas as workflowSagas } from 'sinooa-redux-workflow'

const rootReducer = combineReducers({
    Leaves,
    workflow: workflowReducer,
});

const logger = createLogger();

// silence these saga-based messages
const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED']

// a function which can create our store and auto-persist the data
export default () => {
  const sagaMiddleware = createSagaMiddleware({
    sagaMonitor: Reactotron.createSagaMonitor()
  })
  const middleware = applyMiddleware(logger, sagaMiddleware)
  const store = Reactotron.createStore(rootReducer, compose(middleware))
  sagaMiddleware.run(rootSaga);
  sagaMiddleware.run(workflowSagas);
  return store;
}
