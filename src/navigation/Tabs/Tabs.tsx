import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { COLORS } from '../../constant/Colors';
import { ROUTES } from '../../constant/routes';
import { sizes } from '../../constant/size';
import {
  CallIcon,
  CallIconCopy,
  MessageIcon,
  MessageIconCopy,
  ProfileIcon,
  ProfileIconCopy,
  SettingIcon,
  SettingIconCopy,
} from '../../constant/svg';
import { Message } from '../../screens/Messages/Message';
import { Calls, Contacts, Home, Settings } from '../../screens';

const Tab = createBottomTabNavigator();

export const MyTab = () => {
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: COLORS.white,
          paddingTop: sizes.hp_1
        },
        tabBarActiveTintColor: COLORS.off_white_green,
        tabBarInactiveTintColor: COLORS.off_white_gray,
      }}>
      <Tab.Screen
        name={ROUTES.HOME_SCREEN}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused ? <MessageIconCopy /> : <MessageIcon />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.CALL_SCREEN}
        component={Calls}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused ? <CallIconCopy /> : <CallIcon />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.CONTACTS_SCREEN}
        component={Contacts}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused ? <ProfileIconCopy /> : <ProfileIcon />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.SETTING_SCREEN}
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused ? <SettingIconCopy /> : <SettingIcon />}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
