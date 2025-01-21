import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, Splash } from '../../screens';
import { ROUTES } from '../../constant/routes';
import { OnBoarding } from '../../screens/Onboarding/Onboarding';
;

const Stack = createNativeStackNavigator();
const { Navigator, Screen } = Stack;

export const AuthStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={ROUTES.SPLASH_SCREEN} component={Splash} />
      <Screen name={ROUTES.ONBOARDING_SCREEN} component={OnBoarding} />
      <Screen name={ROUTES.SIGN_IN} component={SignIn} />
    </Navigator>
  );
};
