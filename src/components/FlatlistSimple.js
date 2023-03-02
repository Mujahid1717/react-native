import { StyleSheet, Text, View,FlatList } from 'react-native';
import React from 'react';

const FlatlistSimple = () => {
   const users = ["Honda","Suzuki","BMW","Hyundai","Toyota",]
  return (
    <View>
      <Text style= {styles.headerText}>Listing</Text>
      <FlatList
        data = {users}
        renderItem = {({item})=><Text style={styles.item}>{item}</Text>}
        keyExtractor = {item=>item}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center' 
  },
  item:{
    fontSize:20,
    padding:8,
    color:"white",
    backgroundColor:"blue",
    borderColor:"black",
    borderWidth:2,
    margin:10,
    borderRadius:10,
    width:100,
    textAlign:"center"
  }

});
export default FlatlistSimple;