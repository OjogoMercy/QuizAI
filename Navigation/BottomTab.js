import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Profile from '../screens/Profile';
import History from './../screens/History';
import LeaderBoard from './../screens/LeaderBoard';
import HomeScreen from './../screens/HomeScreen';
import CreateQuiz from './../screens/CreateQuiz';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const CentralAddButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.centralButton}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.addButtonView}>{children}</View>
    </TouchableOpacity>
  );
};
const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ color, size }) => {
      const icons = {
        HomeScreen: 'home',
        Profile: 'user',
        History: 'history',
        LeaderBoard: 'trophy',
        Add:'plus',
      };
      return <Icon name={icons[route.name]} size={size} color={color} />;
    },
    tabBarStyle: {
      backgroundColor: '#1D4ED8', 
      height: 70,
      paddingTop:15, 
      borderTopWidth: 0, },
      tabBarActiveTintColor: '#fff',
    tabBarInactiveTintColor: '#A7C7E7',
    tabBarLabel:''
  });

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator  initialRouteName="HomeScreen" screenOptions={screenOptions}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen
        name="Add"
        component={CreateQuiz} 
        options={{
          tabBarButton: (props) => <CentralAddButton {...props} />,
          tabBarIcon: () => (
            <Icon name="plus" size={22} color="white" />
          ),
        }}
      />
      <Tab.Screen name="LeaderBoard" component={LeaderBoard} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  centralButton: {
    top: -40, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#1D4ED8',
    borderRadius:50,
    borderWidth:5,
    borderColor:'#fff',
  },
  addButtonView: {
    width: 70,
    height: 80,
    borderRadius: 35,
    backgroundColor: '1D4ED8', 
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:40
  },
});
