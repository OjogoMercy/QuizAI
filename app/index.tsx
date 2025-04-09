import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import StackNavigator from './../Navigation/StackNavigator';

export default function App() {
  return (
    <NavigationIndependentTree >
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
