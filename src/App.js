import React from 'react';
import { Provider } from 'react-redux';
import { ThemeContext, getTheme } from 'react-native-material-ui';

import { store } from './store';
import AppNavigator from './navigator';

const uiTheme = {
  palette: {
    primaryColor: 'black',
    accentColor: 'blue',
  },
  toolbar: {
    container: {
      paddingTop: 10,
      height: 60,
    },
  },
  iconSet: 'Ionicons',
};

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeContext.Provider value={getTheme(uiTheme)}>
          <AppNavigator />
        </ThemeContext.Provider>
      </Provider>
    );
  }
}
