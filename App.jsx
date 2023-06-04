import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import HomeScreen from './src/Screens/HomeScreen'

const App = () => {
  return (
    <View>
      <StatusBar hidden />
      <HomeScreen />
    </View>
  )
}

export default App