import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <SafeAreaView>
    <View style={styles.main}>
      <Text style={styles.textStyle}>User Information</Text>
    </View>
    <View style={styles.strip}></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main:{
    padding: 10,
  },
  textStyle:{
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
    letterSpacing: 2,
  },
  strip:{
    backgroundColor: '#000',
    height: 1
  }
});

export default Header