import { StyleSheet, Text, View, StatusBar, Button } from 'react-native'
import React, { useState } from 'react'

const Status = () => {
  const [hide,setHide] = useState(false)
  const [barContent,setBarContent] = useState("default");
  return (
    <View style={styles.main}>
      <StatusBar
      backgroundColor='orange'
      // barStyle='dark-content'
      // barStyle={'light-content'}
      barStyle={barContent}
      hidden = {hide}
      />
      <View style={{margin:20}}>
      <Button title='show bar' onPress={()=>setHide(!hide)}/>
      </View>
      <Button title = 'toggle content' onPress={()=>setBarContent('dark-content')} />
      
    </View>

  )
} 

export default Status

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center'
  }
})