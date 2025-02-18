import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemedView } from './src/CoreComponent/ThemedView';
import { Navigations } from './src/navigation';
import { ThemeProvider } from './src/Context/ThemeContext';
import AuthProvider from './src/Context/AuthContext';

const App = () => {

  return (

    <ThemeProvider>

      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthProvider>
          {/* <AuthContextProvider> */}
          <ThemedView style={{ flex: 1 }}>

            <Navigations />
          </ThemedView>
        </AuthProvider>
        {/* </AuthContextProvider> */}
      </GestureHandlerRootView>
    </ThemeProvider >
  );
};
export default App