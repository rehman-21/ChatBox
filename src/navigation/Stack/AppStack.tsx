import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../../constant/routes';
import { MessageScreen } from '../../screens';

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
    </Navigator>
  );
};
