import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GridMap = () => {
  const books = [
    {id:"1",name:"mujahid"},
    {id:"2",name:"mujahid"},
    {id:"3",name:"mujahid"},
    {id:"4",name:"mujahid"},
    {id:"5",name:"mujahid"},
    {id:"6",name:"mujahid"},
    {id:"7",name:"mujahid"},
  ]
  return (
    <View>
      <Text>Static Text Grid</Text>
      <ScrollView>
      <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
       {
        books.map((item,index)=>
        <Text style={styles.item}key ={index}>{item.name}</Text>
       )}
      {/* <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text>
      <Text style={styles.item}>Book</Text> */}
    
      </View>
      </ScrollView>
    </View>
  )
}

export default GridMap

const styles = StyleSheet.create({
  item:{
    padding:30,
    backgroundColor:'blue',
    margin:6,
    color:'white',

  }
});