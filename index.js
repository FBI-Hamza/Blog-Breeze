/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { firebaseConfig } from './firebaseConfig'; 
import { getApps, initializeApp } from '@react-native-firebase/app';

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

AppRegistry.registerComponent(appName, () => App);
