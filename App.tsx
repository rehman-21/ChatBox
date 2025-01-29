import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemedView } from './src/CoreComponent/ThemedView';
import { Navigations } from './src/navigation';
import { ThemeProvider } from './src/Context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemedView style={{ flex: 1 }}>
          <Navigations />
        </ThemedView>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};
export default App