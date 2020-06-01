import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/styles/themes';

import Routes from './src/routes';

const barStyle = theme.name === 'light' ? 'dark-content': 'light-content';

export default function App() {
  return (
    <>
      <StatusBar barStyle={barStyle} backgroundColor={theme.bgPrimary}/>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}