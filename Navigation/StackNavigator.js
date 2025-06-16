import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import History from './../screens/History';
import LeaderBoard from './../screens/LeaderBoard';
import ForgotPassword from '../screens/ForgotPassword';
import CreateQuiz from './../screens/CreateQuiz';
import EditProfile from './../screens/EditProfile';
import Onboarding from './../screens/Onboarding';
import SignIn from './../screens/SignIn';
import SignUp from './../screens/SignUp';
import BottomTabNavigator from './BottomTab';
import DrawerNavigator from './DrawerTab';
import Details from '@/screens/Details';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="CreateQuiz" component={CreateQuiz} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}