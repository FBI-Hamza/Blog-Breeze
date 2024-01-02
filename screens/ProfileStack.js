
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screen components
import Login from './Login';
import Signup from './Signup';
import Feed from './Feed';
import ContentScreen from './ContentScreen';
import Profile from './Profile';
import Compose from './Compose';
import Gallery from './Gallery';
import RatingScreen from './RatingScreen';
import Feedback from './Feedback';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
         <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} /> 
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="RatingScreen" component={RatingScreen} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="ContentScreen" component={ContentScreen} />
        <Stack.Screen name="Compose" component={Compose} />
        <Stack.Screen name="Gallery" component={Gallery} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
