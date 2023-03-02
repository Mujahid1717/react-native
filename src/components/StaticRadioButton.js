
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const StaticRadioButton = () => {
  const [selectedRadio,setSelectedRadio] = useState(1)
  return (
    <View style = {styles.main}>
      <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
          {
            selectedRadio === 1 ? <View style = {styles.radioBgcolor}></View>
            :null
          }
          </View>
          <Text style ={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity >
      <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {
            selectedRadio === 2 ? <View style = {styles.radioBgcolor}></View>
            :null
          }
          </View>
          <Text style ={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    main:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    radioText:{
      fontSize:20,
      color:'green'
    },
    radio:{
      height:36,
      width:36,
      borderColor:'green',
      borderWidth:2,
      borderRadius:18,
      margin:8
    },
    radioWrapper:{
      flexDirection:'row',
      alignItems:'center'
    },
    radioBgcolor:{
      backgroundColor:'green',
      height:28,
      width:28,
      borderRadius:20,
      margin:2
    }
});
export default StaticRadioButton;