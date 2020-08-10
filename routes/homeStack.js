import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home'
import About from '../screens/about'
import WorkoutDetails from '../screens/workoutDetails'

const screens = {
  "Strength In Numbers": {
    screen: Home,
  },
  WorkoutDetails: {
    screen: WorkoutDetails,
  },
  About: {
    screen: About,
  }
};  

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
