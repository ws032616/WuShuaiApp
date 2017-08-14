import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { RootSibling } from 'react-native-sinoui';
import createTheme from 'react-native-sinoui/styles/theme';
import { ThemeProvider } from 'styled-components/native';
import createStore from './Redux';
import './Config/ReactotronConfig';
import MainPage from './Pages/MainPage';
import LeaveMainPage from './Pages/LeaveMainPage';
import LeaveShowPage from './Pages/LeaveShowPage';
import LeaveSendPage from './Pages/LeaveSendPage';

import GongChuMainPage from './Pages/GongChuMainPage';
import GongChuShowPage from './Pages/GongChuShowPage';
import GongChuSendPage from './Pages/GongChuSendPage';


const App = StackNavigator({
  Home: {screen: MainPage,},
  LeaveMainPage:{screen:LeaveMainPage,},
  LeaveShowPage:{screen:LeaveShowPage,},
  LeaveSendPage:{screen:LeaveSendPage,},

  GongChuMainPage:{screen:GongChuMainPage,},
  GongChuShowPage:{screen:GongChuShowPage,},
  GongChuSendPage:{screen:GongChuSendPage,}

},{
    headerMode: "screen",
    mode: "card",
    initialRouteName: 'Home',  
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#387ef5"
      },
      headerBackTitle: "返回",
      headerTintColor: "#fff"
    }
  }
);
AppRegistry.registerComponent('App', () => App);

export default function(){
    return(
        <Provider store={createStore()}>
          <ThemeProvider theme={createTheme()}>
            <App/>
          </ThemeProvider>
        </Provider>
    );
}