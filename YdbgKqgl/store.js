import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

export default function(reducer) {
  const combinedReducers = combineReducers({
    form: reduxFormReducer,
    ...reducer
  });
  return (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(combinedReducers);
}
