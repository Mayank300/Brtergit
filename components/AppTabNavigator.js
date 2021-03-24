import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import BookRequestScreen from '../screens/BookRequestScreen';
import {Icon} from 'react-native-elements';


export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Icon name="list-alt" type="font-awesome" />,
      tabBarLabel : "Trade",
    }
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions :{
      tabBarIcon : <Icon name="paper-plane" type="font-awesome" />,
      tabBarLabel : "Request Item",
    }
  },
});
