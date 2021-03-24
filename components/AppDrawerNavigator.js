import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyDonationScreen from '../screens/MyDonationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import MyReceivedBooksScreen from '../screens/MyReceivedBooksScreen';
import {Icon} from 'react-native-elements';


export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions : {
      drawerIcon: <Icon name="home" type="font-awesome" />
    }
    },
  MyDonations : {
    screen : MyDonationScreen,
    navigationOptions : {
      drawerIcon: <Icon name="bandcamp" type ="font-awesome" />,
      drawerLabel : "My Exchanges"
    }
  },
  Notification : {
    screen : NotificationScreen,
    navigationOptions : {
      drawerIcon: <Icon name="bell-o" type ="font-awesome" />,
      drawerLabel : "Notifications"
    }
  },
  MyReceivedBooks :{
    screen: MyReceivedBooksScreen,
    navigationOptions : {
      drawerIcon: <Icon name="book" type ="font-awesome" width={30} />,
      drawerLabel : "My Received Items"
    }
  },
  Setting : {
    screen : SettingScreen,
    navigationOptions : {
      drawerIcon: <Icon name="cogs" type ="font-awesome" width={30} />,
      drawerLabel : "Setting"
    }
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
