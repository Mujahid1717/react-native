import { StyleSheet, Text, View ,Platform,SafeAreaView} from 'react-native'
import React from 'react'

const PlatformOs = () => {
  return (
    <SafeAreaView>
    <View>
      <Text style = {{fontSize:30}}>Platform: {Platform.OS}</Text>
      {
        Platform.OS == 'android'
        ? <View style={{backgroundColor:'red', height:100, width:100}}></View>
        : <View style={{backgroundColor:'green', height:100, width:100}}></View>
      } 
      <Text style={styles.main}>Hello</Text> 
      <Text style={{fontSize:20}}>{JSON.stringify(Platform)}</Text>
      <Text style={{fontSize:20,color:'blue'}}>{JSON.stringify(Platform.constants.reactNativeVersion)}</Text> 
    </View>
    </SafeAreaView>
  )
}

export default PlatformOs

const styles = StyleSheet.create({
  main:{
    color:Platform.OS == 'android' ?'black':'red',
    fontSize:20
  }
})