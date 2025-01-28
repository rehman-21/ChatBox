import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './Stack/stack';
import { ROUTES } from '../constant/routes';
import { MyTab } from './Tabs/Tabs';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const Stack = createNativeStackNavigator();

export const Navigations = () => {
  return (
    <BottomSheetModalProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}>
          <Stack.Screen name={ROUTES.AUTH_STACK} component={AuthStack} />
          {/* <Stack.Screen name={ROUTES.APP_STACK} component={AppStack} /> */}
          <Stack.Screen name={ROUTES.MY_TAB} component={MyTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
};
