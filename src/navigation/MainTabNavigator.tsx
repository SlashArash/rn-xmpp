import * as React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SignInScreen from '../screens/SignInScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarOptions: {
    showLabel: false,
  },
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon focused={focused} name={'home'} />
  ),
};

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    SingIn: SignInScreen,
  },
  {
    initialRouteName: 'Settings',
  }
);

SettingsStack.navigationOptions = {
  tabBarOptions: {
    showLabel: false,
  },
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon focused={focused} name={'settings'} />
  ),
};

export default createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack,
});
