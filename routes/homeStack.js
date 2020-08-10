import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home'
import About from '../screens/about'
import WorkoutDetails from '../screens/workoutDetails'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Strength In Numbers",
    },
  },
  WorkoutDetails: {
    screen: WorkoutDetails,
    navigationOptions: {
      title: "Workout Details",
    },
  },
  About: {
    screen: About,
  },
};  

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: "#eee"}
  }
});

export default createAppContainer(HomeStack);
