import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

import MovieSearch from './modules/search';
import MovieDetails from './modules/details';

const StackNavigator = createStackNavigator({
  Search: MovieSearch,
  Details: MovieDetails
}, {
  navigationOptions: {
    header: null,
  },
});

const AppNavigator = createDrawerNavigator({
  Search: StackNavigator
});

export default AppNavigator;
