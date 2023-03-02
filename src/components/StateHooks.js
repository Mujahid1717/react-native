import { Button, StyleSheet, Text, View,TextInput } from 'react-native';
import React,{useState} from 'react';

const StateHooks = () => {
  const [text,changeText]= useState("");

  return (
    <View>
      <Text>Hooks</Text>
      
      <TextInput
        style = {styles.inputStyle}
        placeholder='Enter Text'
        value = {text}
        onChangeText={(text)=>changeText(text)}
        />
      <Button title = "clear Text" onPress={()=>changeText()} />
      <Text stye = {{fontSize:30}}>Your Name is :{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle:{
    fontSize:18,
    color:'blue',
    borderWidth:2,
    borderColor:'blue',
    margin:10

  }

});
export default StateHooks;