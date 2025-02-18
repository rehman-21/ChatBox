import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './Stack/stack';
import { ROUTES } from '../constant/routes';
import { MyTab } from './Tabs/Tabs';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { AppStack } from './Stack/AppStack';
import { ActivityIndicator, View } from 'react-native';
import { Splash } from '../screens';
import { AuthContext } from '../Context/AuthContext';

const Stack = createNativeStackNavigator();

export const Navigations = () => {
  const [splashScreen, setSplashScreen] = useState<boolean>(true);
  const { user, loading } = useContext(AuthContext);

  // Hide the splash screen after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashScreen(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </View>
  //   );
  // }

  return (
    <BottomSheetModalProvider>
      <NavigationContainer>
        {splashScreen ? (
          <Splash />
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
            }}>
            {user ? (
              <Stack.Screen name={ROUTES.MY_TAB} component={MyTab} />
            ) : (
              <Stack.Screen name={ROUTES.AUTH_STACK} component={AuthStack} />
            )}
            <Stack.Screen name={ROUTES.APP_STACK} component={AppStack} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
};
