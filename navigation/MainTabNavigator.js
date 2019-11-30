import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import JournalScreen from '../screens/JournalScreen';
import ActivityScreen from '../screens/ActivityScreen';
import LearnScreen from '../screens/LearnScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-snow' : 'md-snow'} />
  ),
};

HomeStack.path = '';

const JournalStack = createStackNavigator(
  {
    Journal: JournalScreen,
  },
  config
);

JournalStack.navigationOptions = {
  tabBarLabel: 'Journal',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-journal' : 'md-journal'} />
  ),
};

JournalStack.path = '';

const ActivityStack = createStackNavigator(
  {
    Activity: ActivityScreen,
  },
  config
);

ActivityStack.navigationOptions = {
  tabBarLabel: 'Activity',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-apps' : 'md-apps'} />
  ),
};

ActivityStack.path = '';

const LearnStack = createStackNavigator(
  {
    Learn: LearnScreen,
  },
  config
);

LearnStack.navigationOptions = {
  tabBarLabel: 'Learn',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'} />
  ),
};

LearnStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  JournalStack,
  ActivityStack,
  LearnStack
});

tabNavigator.path = '';

export default tabNavigator;
