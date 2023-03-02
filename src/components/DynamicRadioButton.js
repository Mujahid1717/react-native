
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const DynamicRadioButton = () => {
  const [selectedRadio,setSelectedRadio] = useState(1)
  const skills = [
    {
      id :1,
      name:'PHP'
    },
    {
      id :2,
      name:'SQL'
    },
    {
      id :3,
      name:'RN'
    },
    {
      id :4,
      name:'JS'
    },
    
  ]
  return (
    <View style = {styles.main}>
      {
        skills.map((item,index)=><TouchableOpacity
        key = {index}
        onPress={()=>setSelectedRadio(item.id)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
          {
            selectedRadio == item.id? <View style = {styles.radioBgcolor}></View>
            :null
          }
          </View>
          <Text style ={styles.radioText}>{item.name}</Text>
        </View>
      </TouchableOpacity >)
      }
      
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
export default DynamicRadioButton;