import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Splash } from './src/screens';
import { ThemedView } from './src/CoreComponent/ThemedView';
import { Navigations } from './src/navigation';

const App = () => {
  return (
    <GestureHandlerRootView>
      <ThemedView style={{ flex: 1, }}>
        <Navigations />
      </ThemedView>
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})