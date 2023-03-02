import React from 'react';
import {View, Text, StyleSheet, SectionList} from 'react-native';
import Btn from './src/components/button';



const SectionList = (props) => {
  

  const users = [
    {
      id:1,
      name:"Mujahid Akhtar",
      data :["PHP","React Native","JavaScript"]
    },
    {
      id:2,
      name:"Rohail Khan",
      data :["OOP","React Native","JavaScript"]
    },
    {
      id:3,
      name:"Sardar khan",
      data :["C#","React Native","JavaScript"]
    },
    
  ];
  
  return (
   
    <View>
      <Text style = {styles.headerText}>Section List</Text>
      <SectionList 
        sections = {users}
        keyExtractor = {(item, index) => item + index}
        renderItem = {({item}) =>(
        <Text style={styles.itemText}>{item}</Text>
      )}
      renderSectionHeader={({section: {name}}) => (
        <Text style={styles.nameText}>{name}</Text>
      )}
      />
      <View style={{marginHorizontal:50}}>
        <Btn bgColor='blue' txtColor='white' btnLabel={'Signup'}
                 Press={()=>({})} />
      </View>
    </View>
    
  );
};
const styles = StyleSheet.create({
      headerText:{
        fontSize:24,
        fontWeight:'bold',
        marginHorizontal:10,
        marginVertical:12
      },
      nameText:{
        fontSize:26,
        fontWeight:'bold',
        color:"green",
        marginHorizontal:10
      },
      itemText:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:40
        
      }
});
export default SectionList;