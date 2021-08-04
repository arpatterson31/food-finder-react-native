import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import RestaurantInfoScreen from './src/screens/RestaurantInfoScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    RestaurantInfo: RestaurantInfoScreen
  }, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);