import Reactotron, { networking } from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

console.disableYellowBox = true;

Reactotron
  .configure({ name: 'TodosApp' }); // controls connection & communication settings
Reactotron.useReactNative(); // add all built-in react native plugins
Reactotron.use(reduxPlugin());
Reactotron.use(sagaPlugin());
Reactotron.use(networking());
// if we're running in DEV mode, then let's connect!
if (__DEV__) {
  Reactotron.connect();
  Reactotron.clear();
}
