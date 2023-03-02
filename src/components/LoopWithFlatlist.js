import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native'

const LoopFlatList = () => {
  const products = [
    {
      "id": 1,
      "title": "Product 1",
      "category": "electronics",
      "price": 4000,
      "description": "This is description about product 1"
    },
    {
      "id": 2,
      "title": "Product 2",
      "category": "electronics",
      "price": 2000,
      "description": "This is description about product 2"
    },
    {
      "id": 3,
      "title": "Product 3",
      "category": "books",
      "price": 1000,
      "description": "This is description about product 3"
    },
    {
      "id": 4,
      "title": "Product 4",
      "category": "fitness",
      "price": 3000,
      "description": "This is description about product 4"
    },
    {
      "id": 5,
      "title": "Product 5",
      "category": "fitness",
      "price": 4000,
      "description": "This is description about product 5"
    },
    {
      "id": 6,
      "title": "Product 6",
      "category": "gardening",
      "price": 5000,
      "description": "This is description about product 6"
    },
    {
      "id": 7,
      "title": "Product 7",
      "category": "furniture",
      "price": 6000,
      "description": "This is description about product 7"
    },
    {
      "id": 8,
      "title": "Product 8",
      "category": "furniture",
      "price": 7000,
      "description": "This is description about product 8"
    },
    {
      "id": 9,
      "title": "Product 9",
      "category": "accessories",
      "price": 4000,
      "description": "This is description about product 9"
    },
    {
      "id": 10,
      "title": "Product 10",
      "category": "electronics",
      "price": 3000,
      "description": "This is description about product 10", 
    }
  ]
  return (
    <View>
      <SafeAreaView>
      <Text style= {styles.headerText}>Component in Loop with Flat List</Text>
      <FlatList 
        // keyExtractor = {(item)=>{item}}
        data ={products}
        renderItem = {({item})=> 
        <ProductData  item = {item}/>
        // <View  style={styles.box}>
        //   <Text style ={styles.item}>{item.id}</Text>
        //   <Text style ={styles.item}>{item.title}</Text>
        //   <Text style ={styles.item}>{item.category}</Text>
        //   <Text style ={styles.item}>{item.price}</Text>
        //   <Text style ={styles.item}>{item.description}</Text>
        // </View>
        }
        
      />
      </SafeAreaView>
    </View>
  )
}
const ProductData = (props) =>{
  const item = props.item;
  return(
    <View  style={styles.box}>
          <Text style ={styles.item}>{item.id}</Text>
          <Text style ={styles.item}>{item.title}</Text>
          <Text style ={styles.item}>{item.category}</Text>
          <Text style ={styles.item}>{item.price}</Text>
          <Text style ={styles.item}>{item.description}</Text>
        </View>

  )

}
const styles = StyleSheet.create({
  headerText:{
    fontSize:24,
    textAlign:'center',
  },
  box:{
    flexDirection:'row',
    borderWidth:2,
    borderColor:'grey',
    margin:3,
    

  },
  item:{
    fontSize:14,
    color:'blue',
    flex:1,
    margin:2,
    textAlign:'center',
    
    
  }

});
export default LoopFlatList;