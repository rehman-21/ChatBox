import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../../constant/routes';
import { CreateGroupScreen, CreatePoll, MessageScreen } from '../../screens';

const Stack = createNativeStackNavigator();
const { Navigator, Screen } = Stack;

export const AppStack = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}>
      <Screen
        name={ROUTES.MESSAGES_SCREEN}
        component={MessageScreen}
      />
      <Screen
        name={ROUTES.CREATE_GROUP}
        component={CreateGroupScreen}
      />
      <Screen
        name={ROUTES.CREATE_POLL}
        component={CreatePoll}
      />
    </Navigator>
  );
};
