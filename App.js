
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Feed from './screens/Feed';
import ContentScreen from './screens/ContentScreen';
import Profile from './screens/Profile';
import Compose from './screens/Compose';
import Gallery from './screens/Gallery';
import RatingScreen from './screens/RatingScreen';
import Feedback from './screens/Feedback';
import SearchScreen from './screens/SearchScreen';
import BlogScreen from './screens/BlogScreen';

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
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="BlogScreen" component={BlogScreen} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
