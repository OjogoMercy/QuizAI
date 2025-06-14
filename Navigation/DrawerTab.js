import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import History from './../screens/History';
import LeaderBoard from './../screens/LeaderBoard';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="LeaderBoard" component={LeaderBoard} />
    </Drawer.Navigator>
  );
}
