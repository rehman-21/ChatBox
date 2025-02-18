import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoarding, Sign_Up, SignIn, } from '../../screens';
import { ROUTES } from '../../constant/routes';
;

const Stack = createNativeStackNavigator();
const { Navigator, Screen } = Stack;

export const AuthStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={ROUTES.ONBOARDING_SCREEN} component={OnBoarding} />
      <Screen name={ROUTES.SIGN_IN} component={SignIn} />
      <Screen name={ROUTES.SIGN_UP} component={Sign_Up} />
    </Navigator>
  );
};
