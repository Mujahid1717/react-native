import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ListWithMap = () => {
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
    const RenderArray = () =>{
       return products.map((item,index)=>{
        return(
          <View key ={index} style ={styles.itemStyle}>
            <Text style={styles.idText}>{item.id}</Text>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.priceText}>{item.price}</Text>
            <Text style ={styles.categoryText}>{item.category}</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
        );

      })
    }

  return (
    <View>
      <Text style = {styles.headerText}>Listing with Map function</Text>
      <ScrollView>
        <RenderArray />
      {/* {
        products.map((item,index)=>{
          return(
            <View key={index} style ={styles.itemStyle}>
              <Text style={styles.idText}>{item.id}</Text>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.priceText}>{item.price}</Text>
              <Text style ={styles.categoryText}>{item.category}</Text>
              <Text style={styles.descriptionText}>{item.description}</Text>
            </View>
          );

        })
      } */}
      
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText:{
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold'
  },
  itemStyle:{
    padding:15,
    backgroundColor:"blue",
    borderColor:"black",
    borderWidth:2,
    margin:6,
    borderRadius:10,   
  },
  idText:{
    color:'white',
    fontSize:16,
    textAlign:'center'
  },
  titleText:{
    color:'white',
    fontSize:16
  },
  priceText:{
    color:'white',
    fontSize:16
  },
  categoryText:{
    color:'white',
    fontSize:16
  },
  descriptionText:{
    color:'white',
    fontSize:16
  },
});
export default ListWithMap;