
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import searchScreen from './src/screens/searchScreen';


const nav = createStackNavigator({
  searchScreen: searchScreen
}, {
  initialRouteName: 'searchScreen',
  defaultNavigationOptions: {
    title: 'Yelp Search App'
  }
}
);

export default createAppContainer(nav);