import './src/config/ReactotronConfig';

import { StatusBar } from 'expo-status-bar';
import { AppRegistry, Platform } from 'react-native';
import { registerRootComponent } from 'expo';

import { name as appName } from './app.json';
import Root from './src';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <Root />
    </>
  );
}

if (Platform.OS == 'android') {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
