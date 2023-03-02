
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PressButton = () => {
  return (
    <View style={styles.main}>
      <Pressable
        onPress={()=>console.warn('on press')}
        onLongPress={()=>console.warn('long press')}
        onPressIn = {()=>console.warn('prees in')}
        onPressOut = {()=>console.warn('prees out')}
      >
      <Text style={styles.pressableBtn}> Press Me</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center'
  },
  pressableBtn:{
    backgroundColor:"blue",
    color:'white',
    padding:10,
    borderRadius:10,
    margin:20,
    textAlign:'center',
    fontSize:20
    
  }

});
export default PressButton;